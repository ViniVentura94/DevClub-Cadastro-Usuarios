import { useEffect, useState } from "react"
import api from "../../services/api"
import Button from "../../components/Button"
import TopBackGround from "../../components/TopBackground"
import { Container, Title, ContainerUsers, CardUser, TrashIcon, AvatarUser } from "./styles"
import imagemUsuario from '../../assets/users.png'
import avatarNeutro from '../../assets/avatar-neutro.png'
import trash from '../../assets/trash.svg'
import { useNavigate } from "react-router-dom"

function ListUsers() {

    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers() {

            const { data } = await api.get('/usuarios')

            setUsers(data)

        }
        getUsers()
    }, [])

    async function deleteUser(id) {
        await api.delete(`/usuarios/${id}`)
        setUsers(users.filter(user => user.id !== id))
    }

    const navigate = useNavigate()

    return (

        <Container>
            <TopBackGround>
                <img src={imagemUsuario} alt='imagem-usuarios' />
            </TopBackGround>

            <Title>Listagem de usuarios</Title>

            <ContainerUsers>
                {users.map(user => (
                    <CardUser key={user.id}>
                        <AvatarUser
                            src={
                                user.gender === 'masculino'
                                    ? `https://avatar.iran.liara.run/public/boy?username=${user.id}`
                                    : user.gender === 'feminino'
                                        ? `https://avatar.iran.liara.run/public/girl?username=${user.id}`
                                        : avatarNeutro // Avatar Neutro
                            }
                            alt='avatar'
                        />

                        <div className='info'>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                        </div>
                        <TrashIcon src={trash} alt='trash-icon' onClick={() => deleteUser(user.id)} />
                    </CardUser>
                ))}
            </ContainerUsers>

            <Button type='button' onClick={() => navigate('/')}>Voltar</Button>

        </Container>

    )
}

export default ListUsers
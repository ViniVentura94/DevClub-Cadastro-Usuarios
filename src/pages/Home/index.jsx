
import { useRef } from 'react'
import api from '../../services/api'
import { Title, Container, Form, ContainerInput, ContainerInputEmail, Input, InputLabel, SelectGender } from './styles.js'
import imagemUsuario from '../../assets/users.png'
import Button from '../../components/Button'
import TopBackGround from '../../components/TopBackground'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import InputPhoneMasked from '../../components/InputMaskStyled'


function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const inputTelefone = useRef()
  const selectGenero = useRef()

  const navigate = useNavigate()

  const isValidPhone = (phone) => {
    const regex = /^\(?\d{2}\)?[\s-]?\d{4,5}[-]?\d{4}$/;
    return regex.test(phone);
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const registerNewUser = async () => {

    const emailValue = inputEmail.current.value;
    // Verifica se o telefone é válido
    if (!isValidEmail(emailValue)) {
      toast.error("📧 E-mail inválido. Ex: nome@exemplo.com");
      return;
    }

    const phoneValue = inputTelefone.current.value;
    // Verifica se o telefone é válido
    if (!isValidPhone(phoneValue)) {
      toast.error("📵 Telefone inválido. Ex: (11) 91234-5678");
      return;
    }

    try {
      await api.post('/usuarios', {
        name: inputName.current.value,
        age: parseInt(inputAge.current.value),
        email: emailValue,
        phone: phoneValue,
        gender: selectGenero.current.value
      })

      toast.success('✅ Usuário cadastrado com sucesso!')

      // Limpar os campos depois do cadastro
      inputName.current.value = ''
      inputAge.current.value = ''
      inputEmail.current.value = ''
      inputTelefone.current.maskRef?.updateValue()
      inputTelefone.current.value = ''
      selectGenero.current.value = ''

    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error)
      toast.error('❌ Erro ao cadastrar usuário. Tente novamente.')
    }
  }

  return (

    <Container>

      <TopBackGround>
        <img src={imagemUsuario} alt='imagem-usuarios' />
      </TopBackGround>

      <Form>

        <Title>Cadastre-se aqui</Title>

        <ContainerInput>

          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type='text' placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>Idade<span> *</span></InputLabel>
            <Input type='number' placeholder="Idade do usuário" ref={inputAge} />
          </div>

        </ContainerInput>

        <ContainerInput>
          <div>
            <InputLabel>Telefone<span> *</span></InputLabel>
            <InputPhoneMasked
              mask="(99) 99999-9999"
              placeholder="Telefone"
              ref={inputTelefone}
            />
          </div>

          <div>
            <InputLabel>Gênero<span> *</span></InputLabel>
            <SelectGender ref={selectGenero}>
              <option value="">Selecione o gênero</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </SelectGender>
          </div>
        </ContainerInput>

        <ContainerInputEmail>

          <InputLabel>E-mail<span> *</span></InputLabel>
          <Input type='email' placeholder="Email do usuário" ref={inputEmail} />

        </ContainerInputEmail>

        <Button type='button' onClick={registerNewUser} theme='primary' >Cadastrar Usuário</Button>

      </Form>

      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>Ver lista de usuários</Button>

    </Container>
  )
}

export default Home

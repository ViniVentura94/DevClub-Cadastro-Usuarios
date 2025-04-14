import styled from "styled-components";

export const Container = styled.div`
    background-color: #181f36;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-evenly;
    padding: 20px;
    min-height: 100vh;
    gap: 20px;
`

export const Title = styled.h2`
    color: aliceblue;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    @media (max-width: 1080px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 740px) {
        grid-template-columns: 1fr;
    }
`

export const CardUser = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 420px;

    div{
        width: 160px;
        gap: 15px;
    }

    h3{
        color: aliceblue;
        font-size: 18px;
        font-weight: 500;
        text-transform: capitalize;
    }

    p{
        color: aliceblue;
        font-size: 14px;
        font-weight: 300;
        margin-top: 3px;
    }
`

export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 30px;

    &:hover{
        transform: scale(1.1);
        opacity: 0.8;
        transition: all 0.3s;
    }

    &:active{
        opacity: 0.5;
    }
`

export const AvatarUser = styled.img`
    height: 80px;
    border-radius: 50%;
`

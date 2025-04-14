import styled from "styled-components";

export const Button = styled.button`
    border-radius: 30px;
    border: ${props => props.theme === 'primary' ? 'none' : '1px solid #fff'};
    background:${props => props.theme === 'primary' ? 'linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)' : 'transparent'};
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;

    &:hover {
    transition: 0.3s ease-in-out;
    opacity: 0.8;
    box-shadow: ${(props) =>
        props.theme === "primary"
            ? "0 0 10px #ef4f45"
            : "0 0 10px rgba(255, 255, 255, 0.2)"};
    background: ${(props) =>
        props.theme === "primary"
            ? "linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)"
            : "rgba(255, 255, 255, 0.05)"};
    border: ${(props) =>
        props.theme === "primary" ? "none" : "1px solid rgba(255, 255, 255, 0.2)"};
    }

    &:active{
        opacity: 0.5;
        transition: 0.3s ease-in-out;
    }
`
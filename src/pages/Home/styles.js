import styled from "styled-components";

export const Container = styled.div`
    background-color: #181f36;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-evenly;
    padding: 20px;
    height: 100vh;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;
`

export const Title = styled.h2`
    color: aliceblue;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
`

export const ContainerInput = styled.div`
    display: flex;
    gap: 20px;

    > div{
        flex: 1;
    }
`

export const ContainerInputEmail = styled.div`
    width: 100%;
`

export const Input = styled.input`
    border-radius: 10px;
    border: solid 1px #d2daae;
    background-color: #fff;
    padding: 12px 20px;
    outline: none;
    width: 100%;
`

export const SelectGender = styled.select`
  border-radius: 10px;
  border: solid 1px #d2daae;
  background-color: #fff;
  padding: 12px 20px;
  outline: none;
  width: 100%;
  color: #000;
  font-size: 14px;
  font-family: inherit;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="5"><path fill="%23333" d="M0 0l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 10px;
`

export const InputLabel = styled.label`
    color: #fff;
    font-size: 12px;
    font-weight: 500;

    span{
        color: #ef4f45;
        font-weight: bold;
    }
`

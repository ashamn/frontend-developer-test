import styled from 'styled-components';


export const Container = styled.div`
    background-color: #263238;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lato';
`

export const FormContainer = styled.div`
    width: 300px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: #1b2327 5.95px 5.95px 3px;
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 45px;
    margin-bottom: 10px;
`

export const TextField = styled.input`
    height: 40px;
    border-radius: 3px;
    padding-right: 10px;
    padding-left: 35px;
    border: 0px;
    background-color: #eceff1;
    outline: none;
    width: 100%;
    box-sizing: border-box;

    ::placeholder {
        font-family: 'Lato';
        font-weight: 600;
    }
`

export const TextFieldWrapper = styled.div`
    margin: 3px auto;
    width: 90%;

    .login-icon {
        position: absolute;
        padding: 10px;
        padding-top: 12px;
    }
`

export const LoginButtonWrapper = styled.div`
    text-align: center;
`

export const LoginButton = styled.input.attrs({
    type: 'submit',
    value: 'LOG IN'
})`
    margin-top: 15px;
    height: 40px;
    font-family: 'Lato';
    font-weight: 600;
    background-color: #0277bd;
    color: #fff;
    border: 0;
    border-radius: 3px;
    width: 40%;
`
export const Error = styled.div`
    text-align: center
`


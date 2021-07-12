import React, { useState } from 'react';
import loginModel from '../../models/login';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faEnvelope, faExclamation } from '@fortawesome/free-solid-svg-icons';
import * as S from './style';

import { login } from '../../api/login'


library.add(faCertificate, faEnvelope, faExclamation);

export const Login = (props) => {

    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState([]);

    const handleLogin = (e) => {
        e.preventDefault();
        setErrors([]);

        if (_validations(credentials)) {
            const toSend = {
                credentials,
                url: 'login'
            };
            login(toSend).then(data => {
                if (data.status === 200) {
                    localStorage.setItem('tokenid', data.data);
                    props.setLogin({ email: credentials.email, tokenid: data.data });
                }
            }).catch(error => {
                error.response &&
                    error.response.data &&
                    setErrors([{
                        message: `${error.response.data}`
                    }]);
            })
        }

        setCredentials({
            email: '',
            password: ''
        });
    }

    const _validations = (data) => {

        if (!data.email || !data.password) {
            setErrors([{
                message: "Missing email and/or password."
            }])
            return false;
        } else if (!_validateEmail(data.email)) {
            setErrors([{
                message: "Invalid Email"
            }])
            return false;
        }

        return true;
    }

    const _validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <S.Container>
            <S.FormContainer>
                <form onSubmit={handleLogin}>
                    <S.Title>
                        <span>Login</span>
                    </S.Title>
                    {
                        loginModel.fields &&
                        Object.keys(loginModel.fields).map(field => {
                            return (
                                <S.TextFieldWrapper key={field}>
                                    <span className="fa-layers fa-fw login-icon">
                                        {
                                            loginModel.fields[field].icon.map((icon, indx) => {
                                                return <FontAwesomeIcon
                                                    key={indx}
                                                    icon={['fas', icon.name]}
                                                    style={icon.style}
                                                />
                                            })
                                        }
                                    </span>
                                    <S.TextField
                                        placeholder={loginModel.fields[field].placeholder}
                                        onChange={e => setCredentials({ ...credentials, [field]: e.target.value })}
                                        value={credentials[field]}
                                    />
                                </S.TextFieldWrapper>
                            )
                        })
                    }
                    <S.LoginButtonWrapper>
                        <S.LoginButton />
                    </S.LoginButtonWrapper>
                </form>
                {errors.length > 0 && <S.Error>
                    {errors.map((error, indx) => <p key={indx}>{error.message}</p>)}
                </S.Error>}
            </S.FormContainer>
        </S.Container>
    )
}
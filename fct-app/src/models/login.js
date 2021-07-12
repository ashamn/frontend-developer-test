const loginModel = {
    fields: {
        email: {
            type: 'email',
            icon: [{
                name: 'envelope'
            }],
            placeholder: 'Email Address',
            errors: {
                empty: 'Email address is required',
                invalid: 'Invalid email address'
            }
        },
        password: {
            type: 'password',
            icon: [
                {
                    name: 'certificate',
                },
                {
                    name: 'exclamation',
                    style: {
                        color: 'white',
                        height: '7px'
                    }
                }
            ],
            placeholder: 'Password',
            errors: {
                empty: 'Password is required',
                invalid: 'Incorrect password'
            }
        }
    }
}

export default loginModel;
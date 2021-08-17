import React from 'react'
import { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const initialState = {
    username: "lambda",
    password: "school",
}

const LoginForm = (props) => {
    const [ credentials, setCredentials ] = useState(initialState);

    const handleChange = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        })
    }

    const login = event => {
        event.preventDefault();
    
        axiosWithAuth().post('login/endpoint', credentials)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.token);
                props.history.push('/protected')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return(
        <div>
            <form onSubmit = {login}>
                <label>Username:
                    <input
                        name = "username"
                        type = "text"
                        value = {credentials.username}
                        onChange = {handleChange}
                    />
                </label>

                <label>Password:
                    <input
                        name = "password"
                        type = "password"
                        value = {credentials.password}
                        onChange = {handleChange}
                    />
                </label>

                <button>Log in</button>
            </form>
        </div>
    );
}

export default LoginForm;
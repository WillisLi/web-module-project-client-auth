import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const initialState = {
    username: "lambda",
    password: "school",
}

const isLoadingState = {
    loading: false,
}

const LoginForm = (props) => {
    const [ credentials, setCredentials ] = useState(initialState);
    const [ isLoading, setLoading ] = useState(isLoadingState);

    const handleChange = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        })
    }

    const login = event => {
        event.preventDefault();
    
        axios.post('http://localhost:5000/api/login', credentials)
            .then(response => {
                localStorage.setItem('token', response.data.payload);
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
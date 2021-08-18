import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialState = {
    name: "",
    age: 0,
    email: "",
}

const FriendForm = (props) => {
    const [ friendValues, setFriendValues ] = useState(initialState);

    const handleChange = event => {
        setFriendValues({
            ...friendValues,
            [event.target.name]: event.target.value,
        })
    }

    const submit = event => {
        event.preventDefault();
    
        axiosWithAuth().post('friends/', friendValues)
            .then(response => {
                console.log(response.data)
                props.history.push('/protected')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <form onSubmit = {submit}>
                <label>Name:
                    <input
                        name = "name"
                        type = "text"
                        value = {friendValues.name}
                        onChange = {handleChange}
                    />
                </label>
                
                <label>Age:
                    <input
                        name = "age"
                        type = "number"
                        value = {friendValues.age}
                        onChange = {handleChange}
                    />
                </label>

                <label>Email:
                    <input
                        name = "email"
                        type = "email"
                        value = {friendValues.email}
                        onChange = {handleChange}
                    />
                </label>

                <button>Submit</button>
            </form>
        </div>
    );
}

export default FriendForm;
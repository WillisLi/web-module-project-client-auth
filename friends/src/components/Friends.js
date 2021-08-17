import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const initialState = {
    friends: [],
}

const Friends = () => {
    const { friends, setFriends } = useState(initialState);

    const getData = () => {
        axiosWithAuth().get('/friends')
            .then(response => {
                console.log(response)
                setFriends(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {friends.map(friend => {
                return(
                    <p>Name: {friend.name}</p>
                );
            })}
        </div>
    );
}

export default Friends;
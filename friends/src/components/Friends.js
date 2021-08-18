import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import styled from 'styled-components'

const Friend = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15vw;
    border: 1px solid black;
    margin: 0.5% 0%;
`

const FriendsLists = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const initialState = {
    friends: [],
}

const Friends = () => {
    const [ friendsList, setFriends ] = useState(initialState);

    const getData = () => {
        axiosWithAuth().get('/friends')
            .then(response => {
                setFriends({friends: response.data})
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        getData();
    }, []); 

    return (
        <FriendsLists>
            {friendsList.friends.map(friend => (
                <Friend key = {friend.id}>
                    <h4>{friend.name}</h4>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </Friend>
                )
            )}
        </FriendsLists>
    );
}

export default Friends;

import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

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
        <div>
            {friendsList.friends.map(friend => (
                <div key = {friend.id}>
                    <h4>{friend.name}</h4>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
                )
            )}
        </div>
    );
}

export default Friends;

//Class Component
// class Friends extends React.Component {
//     state = {
//         friends: []
//     };

//     getData = () => {
//         axiosWithAuth().get('/friends')
//             .then(response => {
//                 console.log(response.data)
//                 this.setState({
//                     friends: response.data
//                 })
//                 console.log(this.state.friends);
//             })
//             .catch(error => {
//                 console.log(error);
//             })
//     }

//     componentDidMount() {
//         this.getData();
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.friends.map(friend => (
//                     <p>Name: {friend.name}</p>
//                     )
//                 )}
//             </div>
//         );
//     }
// }
import React, { useEffect } from "react";
import axiosWithAuth from './../utils/axiosWithAuth';

const Logout = (props)=> { 
    useEffect(()=> {
        axiosWithAuth()
            .post('/logout')
            .then(response => {
                localStorage.removeItem("token");
            });
        
    }, []);
    
    return(<div></div>);
}

export default Logout;
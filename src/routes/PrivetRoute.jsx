import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const PrivetRoute = ({ children , roles }) => {
    const cookies = new Cookies();
    let user = cookies.get('user');

    if (user) {
        if (roles.includes(user.role)){
            return children;
        } else {
            return <Navigate replace to='/' />
        }
    } else {
        return <Navigate replace to='/' />
    }
  
}

export default PrivetRoute
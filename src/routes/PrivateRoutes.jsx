import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
  
   
    if(user){
        return children
    }else {
         return <Navigate to="/login" replace={true} />

    }
  
};

export default PrivateRoutes;
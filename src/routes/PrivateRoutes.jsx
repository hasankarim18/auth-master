import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return (
          <div className="h-screen w-screen flex items-center justify-center">
            <progress className="progress w-56"></progress>
          </div>
        );
    }
  
   
    if(user){
        return children
    }else {
         return <Navigate to="/login" replace={true} />

    }
  
};

export default PrivateRoutes;
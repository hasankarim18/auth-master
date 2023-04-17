import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase.config';
export const AuthContext = createContext(null)

const auth = getAuth(app)


const AuthProviders = ({children}) => {
   const [user, setUser] = useState(null)

useEffect(() => {
    const unsubscirbe = onAuthStateChanged(auth, (currentUser) => {
 //   console.log("auth state change", currentUser);
    setUser(currentUser);
    });
    return () => {
    unsubscirbe();
    };
}, []);

   const createUser = (email, password)=> {
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const singInUser = (email, password)=> {
    return signInWithEmailAndPassword(auth, email, password)
   }

   const userSignOut = ()=> {
    return signOut(auth);
   }

   const authInfo = {
     user,
     createUser,
     singInUser,
     userSignOut,
   };

   // observe auth state change 
   
  
   
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState(null)

    // signup email, pass
    const SignUp = (email, password)=>{
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign in
    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    //handle current User
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    } ,[])
    console.log(user);

    //logout
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    
    
    //update profile

    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }
    
    
    
    
   //global object 
    const authInfo = {
        SignUp,
        user,
        logOut,
        login,
        updateUser,
        setUser,
        loading,
        





    }

    return (
        
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
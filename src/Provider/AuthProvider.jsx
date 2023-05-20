// import React from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.conf";

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider()
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

// createUserWithEmailAndPassword

    const createUserWithEmailAndPass = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // Authenticate Using Google
const googleAuthenticate = () =>{
  return signInWithPopup(auth,providerGoogle)
}

    
//  onAuthStateChanged

  useEffect(() => {
    const connection = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      return connection();
    };
  }, []);


// signOut

 const logOut = () =>{
   return signOut(auth)
 }
    const authInfo = {
      createUserWithEmailAndPass,
      user,
      googleAuthenticate,
      logOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
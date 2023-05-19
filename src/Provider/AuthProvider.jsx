// import React from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
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

   onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
        console.log(currentUser);
        setUser(currentUser)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });


    const authInfo = {
      createUserWithEmailAndPass,
      user,
      googleAuthenticate,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
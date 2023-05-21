// import React from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.conf";

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider()
const providerFacebook = new FacebookAuthProvider()
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loding, setloding] = useState(true);

  // createUserWithEmailAndPassword

  const createUserWithEmailAndPass = (email, password) => {
    setloding(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signInWithEmailAndPassword
  const signInWithEmAndpass = (email, password) => {
    setloding(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Authenticate Using Google
  const googleAuthenticate = () => {
    setloding(false);
    return signInWithPopup(auth, providerGoogle);
  };
  // Authenticate Using Facebook Login

  const authenticateUsingFacebook = () => {
    return signInWithPopup(auth, providerFacebook);
  }; 
  // Manage Users in Firebase

  const userProfile = (displayName, photoURL) => {
    // console.log(displayName,photoURL);
    return updateProfile(auth.currentUser, {
      displayName: `${displayName}`,
      photoURL: `${photoURL}`,
    });
  };
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

  const logOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    createUserWithEmailAndPass,
    signInWithEmAndpass,
    user,
    googleAuthenticate,
    logOut,
    userProfile,
    authenticateUsingFacebook,
    loding,
    setloding,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
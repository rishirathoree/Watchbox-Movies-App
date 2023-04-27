import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

 const Authcontext = createContext();

const AuthProviderContext = ({ children }) => {
    const[user,setUser] = useState()

  const signUpWithEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(()=>{
    const subscribe = onAuthStateChanged(auth,(currentuser)=>{
        setUser(currentuser)
    })
    
    return()=>{
        subscribe()
    }
  })
  const logout = () => {
    return (signOut(auth))
}

  return (
    <Authcontext.Provider value={{ signUpWithEmailPass,user,logout,signInWithEmailPass }}>
      {children}
    </Authcontext.Provider>
  );
};
export default AuthProviderContext;
export const useAuth = () => {
    return (useContext(Authcontext))
}

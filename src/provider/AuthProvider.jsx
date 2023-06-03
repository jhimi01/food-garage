import {createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';



export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerGoogle = new GoogleAuthProvider();


    const createUser=(email, password)=>{
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email, password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }


    const googleLogin = ()=>{
        setLoading(true)
       return signInWithPopup(auth, providerGoogle)
    }

    const logOut=()=>{
        return signOut(auth)
    }


    const updateUserProfile=(name, photo)=>{
       return updateProfile(auth.currentUser, {
            name: name, photo: photo
        })
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
            console.log(currentUser)

          if (currentUser) {
            axios.post('http://localhost:5000/jwt', {
                email: currentUser.email
            })
            .then(data => {
                console.log(data.data.token)
                localStorage.setItem('access-token', data.data.token)
                setLoading(false)
            })
          }
          else{
            localStorage.removeItem('access-token')
          }

        })
        return ()=>{
           return unsubscribe();
        }
    },[])


    const authInfo={
  user,
  loading,
  createUser,
  signIn,
  googleLogin,
  logOut,
  updateUserProfile
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
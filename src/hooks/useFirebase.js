import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, provider)
        
        
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .catch(error => {
            setError(error.message)
        })
    }

    useEffect(()=>{
        
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            
        })
        return () => unsubscribed;
    }, [])
    return {
        user,
        error,
        setError,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        
        return signInWithPopup(auth, provider)
        
        
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(()=> setIsLoading(false));
        
    }

    useEffect(()=>{
        
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else {
                setUser({})
            } 
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    return {
        user,
        error,
        isLoading,
        setError,
        setIsLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;
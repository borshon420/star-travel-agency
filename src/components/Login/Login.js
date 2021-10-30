import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation} from 'react-router';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const {signInUsingGoogle, setError} = useAuth();
    const location = useLocation();
    const history = useHistory();
    
    const redirect_uri = location.state?.form || '/';
    console.log(redirect_uri)
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then((result)=> {
            history.push(redirect_uri)  
        })
        .catch(error => {
            setError(error.message);
        })
        
    }
    

    return (
        <div style={{marginBottom: '400px'}}>
            <h1>Please Login with your Google Account</h1>
            <Button onClick={handleGoogleLogin} variant="warning">Continue with Google</Button>
        </div>
    );
};

export default Login;
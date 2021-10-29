import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const {signInUsingGoogle, setError} = useAuth();
    const history = useHistory();
    const location = useLocation();

    const redirect_uri = location.state?.form || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle().then((result)=> {
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
            <p>Don't have an account? <span><Link to="/booking">Create an account</Link></span></p>
        </div>
    );
};

export default Login;
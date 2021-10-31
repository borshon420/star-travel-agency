import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useHistory, useLocation} from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';
import icon from '../../images/icon/icon.png';


const Login = () => {
    const {signInUsingGoogle, setError} = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    console.log(location)
    const history = useHistory();
    
    const redirect_uri = location.state?.from || '/';
    
    const handleGoogleLogin = () => {
        setIsLoading(true);
        signInUsingGoogle()
        .then((result)=> {
            history.push(redirect_uri)  
        })
        .catch(error => {
            setError(error.message);
        })
        .finally(()=>{
            setIsLoading(false);
        })
        
    }
    
    if (isLoading){<Spinner animation="border" />}
    return (
        <div className="login-container">
            <div className="login-card">
            <h3>Login with</h3>
            <div className="login-button">
            <button onClick={handleGoogleLogin} variant="warning"><img src={icon} alt="" />Continue with Google</button>
            </div>
            </div>
        </div>
    );
};

export default Login;
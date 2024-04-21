import React, { useState } from 'react';
import axios from 'axios';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Spinner from 'react-bootstrap/Spinner';
import SocialSignUp from './SocialSignUp';

const SignIn = ({ setSignIn }) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('http://localhost:8080/login', user);
            setMessage('Sign In successful');
        } catch (error) {
            setError('Sign In failed');
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleShowForgotPassword = () => {
        setShowForgotPassword(!showForgotPassword);
    }

    return (
        <form className="sign-in-form" onSubmit={handleSubmit}>
            <h2 className="title">Sign In</h2>
            <div className="input-field">
                <span className="fIcon"><FaEnvelope /></span>
                <input placeholder="Email" name="email" type="email" onChange={handleChange} value={user.email} />
            </div>
            <div className="input-field">
                <span className="fIcon"><FaLock /></span>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} value={user.password} />
            </div>
            {error && <p className="text-danger">{error}</p>}
            {message && <p className="text-success">{message}</p>}
            <div onClick={handleShowForgotPassword} className='text-bold' style={{ cursor: "pointer", color: '#4C25F5' }}>Forgot Password ?</div>
            <button type="submit" className="btn btn-primary btn-block mt-2">
                {loading ? <Spinner animation="border" variant="info" /> : "Sign In"}
            </button>
            <p className="social-text">Or Sign in with social platforms</p>
            <SocialSignUp />
        </form>
    );
};

export default SignIn;

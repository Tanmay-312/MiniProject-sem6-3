import React, { useState } from 'react';
import axios from 'axios';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import Spinner from 'react-bootstrap/Spinner';

const SignUp = ({ setSignUp }) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('http://localhost:8080/register', user);
            setMessage('Sign Up successful');
        } catch (error) {
            setError('Sign Up failed');
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <form className="sign-up-form" onSubmit={handleSubmit}>
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
                <span className="fIcon"><FaUser /></span>
                <input placeholder="First Name" name="firstName" type="text" onChange={handleChange} value={user.firstName} />
            </div>
            <div className="input-field">
                <span className="fIcon"><FaUser /></span>
                <input placeholder="Last Name" name="lastName" type="text" onChange={handleChange} value={user.lastName} />
            </div>
            <div className="input-field">
                <span className="fIcon"><FaEnvelope /></span>
                <input placeholder="Email" name="email" type="email" onChange={handleChange} value={user.email} />
            </div>
            <div className="input-field">
                <span className="fIcon"><FaLock /></span>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} value={user.password} />
            </div>
            {error && <h6 className="text-danger text-center">{error}</h6>}
            {message && <h6 className="text-success text-center">{message}</h6>}
            <button type="submit" className="btn btn-primary btn-block mt-2">
                {loading ? <Spinner animation="border" variant="info" /> : "Sign Up"}
            </button>
        </form>
    );
};

export default SignUp;

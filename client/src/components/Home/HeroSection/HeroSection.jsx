import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div>
                    <small>Transforming Lives, One Paw Print at a Time</small>
                    <h1>Welcome to PawPeople Website<br /> Where Every Dog Finds Hope</h1>
                    <small>Dedicated to Rescuing, Rehabilitating, and Re-homing Dogs in Need</small>
                    <h1>Central India's First Recovery Home for Street Dogs.</h1>
                </div>
                <div className="d-flex justify-content-start gap-2">
                    <Link to={'/login'} className="btn-get-started scrollto">Login for adoption</Link>
                    <Link to={'/about'} className="btn-get-started scrollto">Learn more about us</Link>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;
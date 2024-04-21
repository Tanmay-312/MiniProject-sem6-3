import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { FaLocationArrow, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Header from '../Shared/Header/Header';
import SubHeader from '../Shared/SubHeader';
import Footer from '../Shared/Footer/Footer';

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async (data) => {
        try {
            await axios.post('http://localhost:8080/contact', data);
            setMessage('Message sent successfully');
            setError('');
            reset(); // Clear the form
        } catch (error) {
            setError('Failed to send message');
            setMessage('');
        }
    };

    return (
        <>
            <Header />
            <SubHeader title="Contact us" subtitle="Tell us your details, so we can contact you when your query is solved." />
            <section id="contact" className="contact mt-5 mb-5">
                <div className="container" style={{ marginTop: '80px', marginBottom: '120px' }}>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="info rounded p-3" style={{ background: '#f8f9fa' }}>
                                <div className="d-flex mb-2 gap-2">
                                    <FaLocationArrow className='icon' />
                                    <div>
                                        <h4>Location:</h4>
                                        <p>Neelbagh, Bhopal (Madhya Pradesh)</p>
                                    </div>
                                </div>
                                <div className="d-flex mb-2 gap-2">
                                    <FaEnvelope className='icon' />
                                    <div>
                                        <h4>Email:</h4>
                                        <p>hello@pawpeople.in</p>
                                    </div>
                                </div>
                                <div className="d-flex mb-2 gap-2">
                                    <FaPhoneAlt className='icon' />
                                    <div>
                                        <h4>Instagram:</h4>
                                        <p>@pawwwpeople</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="mb-5 p-2 rounded" style={{ background: '#f8f9fa' }}>
                                <form className="row form-row" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="col-md-6">
                                        <div className="form-group mb-2 card-label">
                                            <label>First Name</label>
                                            <input required {...register("firstName")} className="form-control" placeholder='First Name'/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-2 card-label">
                                            <label>Last Name</label>
                                            <input required {...register("lastName")} className="form-control" placeholder='Last Name'/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-2 card-label">
                                            <label>Email</label>
                                            <input required {...register("email")} type='email' className="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-2 card-label">
                                            <label>Subject</label>
                                            <input required {...register("subject")} className="form-control" placeholder="Enter your subject"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className='form-label'>Message</label>
                                            <textarea required {...register("message")} className="form-control mb-3" cols="30" rows="10" placeholder="enter your message"/>
                                        </div>
                                    </div>
                                    <div className="text-center mt-3 mb-5">
                                        <button type='submit' className="appointment-btn">Send Message</button>
                                    </div>
                                </form>
                                {error && <div className="text-danger">{error}</div>}
                                {message && <div className="text-success">{message}</div>}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        {/* eslint-disable-next-line */}
                        <div style={{ width: '100%' }}><iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Neelbagh,%20Madhya%20Pradesh,%20India+(Paw%20People)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;

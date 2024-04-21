import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="footer position-relative">
			<div className="footer-top">
				<div className="container-fluid">
					<div className="row">
						<div className="col-6 col-md-6 col-lg-3">
							<div className="footer-widget footer-about">
								<div className="footer-logo">
									<Link to={'/'}>
										<img src={logo} alt="logo" style={{ maxWidth: '160px' }} />
									</Link>
								</div>
								<div className="footer-about-content">
									<p className='form-text' style={{maxWidth:200}}>PAW PEOPLE - Dog Rescue and Shelter </p>
								</div>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3">
							<div className="footer-widget footer-contact">
								<h2 className="footer-title mt-3 mt-md-0">Contact Us</h2>
								<div className="footer-contact-info">
									<div className="footer-address">
										<span><i className="fas fa-map-marker-alt"></i></span>
										<p> Neelbagh,<br /> Bhopal (Madhya Pradesh) </p>
									</div>
									<p>
										<i className="fas fa-phone-alt"></i>
										hello@pawpeople.in
									</p>
									<p className="mb-0">
										<i className="fas fa-envelope"></i>
										@pawwwpeople
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container-fluid">

					<div className="copyright">
						<div className="row">
							<div className="col-md-6 col-lg-6">
								<div className="copyright-text">
									<p className="mb-0"><a href="templateshub.net">
										<div className="copyRight text-center">
											<p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
										</div></a></p>
								</div>
							</div>
							<div className="col-md-6 col-lg-6">
								<div className="copyright-menu">
									<ul className="policy-menu d-flex gap-2 justify-content-center">
										<Link to={'/'} className='text-white'>Terms and Conditions</Link>
										<Link to={'/'} className='text-white'>Policy</Link>
									</ul>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

		</footer>
	);
};

export default Footer;
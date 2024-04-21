import React from 'react';
import './InfoPage.css';
import { FaClock, FaHeadset,FaHouseUser  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const InfoPage = () => {
    return (
        <section className="why-us mt-5 mt-md-0">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h3>Why Choose Us?</h3>
                            <p>
                            We invite you to discover what sets our dog rescue organization apart. 
                            With years of dedicated experience in rescuing, rehabilitating, and 
                            re-homing dogs, we bring a wealth of expertise to every aspect of our 
                            operation. What truly distinguishes us is our compassionate approach 
                            to dog rescue. Every dog in our care is treated with the utmost love, 
                            care, and individual attention, ensuring they receive the best possible 
                            chance at a happy and fulfilling life. At the heart of our organization 
                            lies a commitment to transparency and accountability. We believe in 
                            operating with integrity in all that we do, from our adoption processes 
                            to our financial stewardship. Our successful track record speaks volumes, 
                            with countless heartwarming success stories of dogs finding loving forever 
                            homes. These stories, along with testimonials from adopters and volunteers, 
                            showcase the tangible impact of our work in the community. Community 
                            engagement is central to our mission. Through outreach programs, 
                            educational initiatives, and partnerships with local businesses and 
                            organizations, we strive to make a positive difference beyond our shelter 
                            walls. Our dedicated team, comprised of passionate staff, volunteers, and 
                            board members, is the driving force behind our success. Their unwavering 
                            commitment and tireless efforts ensure that every dog receives the care 
                            and attention they deserve. We take pride in our impactful programs, 
                            designed to meet the diverse needs of rescued dogs. From senior dog 
                            adoption programs to behavioral training and special needs care, we go 
                            above and beyond to provide tailored support for every canine companion. 
                            As we look to the future, our vision is clear: to expand our services, 
                            increase community outreach, and continue making a meaningful difference 
                            in the lives of dogs in need. Join us on this journey and discover why 
                            choosing our organization means choosing compassion, commitment, and care 
                            for dogs in need.
                            </p>
                            <br />
                            <div className="text-center">
                            <Link to={'/about'} className="more-btn">Learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaHouseUser className="icon"/>
                                        <h4>Volunteer and foster programs</h4>
                                        <small className='text-secondary'>Empowering individuals to directly impact the lives 
                                                    of rescued dogs through volunteering and fostering.</small>
                                        <br />
                                        <p>Our volunteer and foster programs offer invaluable opportunities 
                                            for individuals to make a direct impact on the lives of rescued 
                                            dogs. Volunteers play a vital role in our organization, 
                                            providing essential care, socialization, and enrichment to dogs 
                                            in our shelter. From walking and grooming to training and playtime, 
                                            volunteers help ensure that every dog receives the love and 
                                            attention they deserve. Our foster program provides temporary 
                                            homes for dogs awaiting adoption, offering a nurturing environment 
                                            where they can thrive outside of the shelter setting. 
                                            Fosters provide care, companionship, and socialization, helping 
                                            dogs adjust to home life and preparing them for their forever 
                                            families. Both volunteer and foster opportunities are flexible 
                                            and rewarding, allowing individuals to contribute their time, 
                                            skills, and compassion in meaningful ways. Whether you're a dog 
                                            lover looking to make a difference or someone seeking a rewarding 
                                            volunteer experience, we welcome you to join our volunteer and 
                                            foster programs and become part of our mission to rescue, 
                                            rehabilitate, and re-home dogs in need.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaHeadset className="icon"/>
                                        <h4>Events and Fund Raises</h4>
                                        <h6 className='text-secondary'>+88 01751 040425</h6>
                                        <p>Join us in our upcoming events and fundraisers dedicated to 
                                            supporting our dog rescue mission. From adoption drives to 
                                            charity walks, there's something for everyone to get involved 
                                            in. These events not only raise vital funds for our organization 
                                            but also help raise awareness about the importance of dog rescue 
                                            and adoption. Whether you're a dog lover, a supporter of animal 
                                            welfare, or simply looking for a fun way to give back to the 
                                            community, our events provide an opportunity to make a meaningful 
                                            impact. By participating in our fundraisers, you're directly 
                                            contributing to the care, rehabilitation, and re-homing of dogs 
                                            in need, giving them a second chance at a happy and fulfilling 
                                            life. Join us and be a part of something special as we come 
                                            together to make a difference for dogs in need.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaClock className="icon"/>
                                        <h4>Working Hours</h4>
                                        <small className='text-secondary'>Success Stories</small>
                                        <p>Our success stories are tales of hope, resilience, and the power 
                                            of second chances. They showcase the incredible transformations 
                                            that occur when dogs find their forever homes through our rescue 
                                            efforts. Each story is a testament to the unwavering dedication 
                                            of our team and the boundless love and compassion of adopters. 
                                            From shy rescues blossoming into confident companions to senior 
                                            dogs finding comfort and joy in their golden years, our success 
                                            stories celebrate the unique journey of every dog we've had the 
                                            privilege to rescue. These heartwarming narratives inspire us 
                                            to continue our mission of saving lives and creating happy 
                                            endings, one adoption at a time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default InfoPage
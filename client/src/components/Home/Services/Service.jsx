import React from 'react';
import './index.css';
import img from '../../../images/dog 1.jpg'
import img2 from '../../../images/dog 2.jpg'
import img3 from '../../../images/dog 3.jpg'
import img4 from '../../../images/Sit with dog.jpg'

const Service = () => {
    return (
        <section className="container" style={{marginTop: 200, marginBottom:200}}>
            <div className='mb-5 section-title text-center'>
                <h2>Services</h2>
                <p className='m-0'>
                    Dog Adoption: Browse through profiles of rescued dogs available for adoption, 
                    complete with photos, descriptions, and adoption procedures.
                    <br />
                    Foster Programs: Learn about our foster programs and sign up to provide temporary 
                    homes for dogs awaiting adoption, offering them love, care, and socialization.
                    <br />
                    Volunteer Opportunities: Get involved by volunteering your time at our shelter, 
                    assisting with dog care, administrative tasks, or participating in outreach events.
                    <br />
                    Donations: Make monetary donations to support our rescue efforts or donate essential 
                    items such as food, blankets, and toys to help care for our dogs.
                    <br />
                    Educational Resources: Access resources on responsible pet ownership, dog care tips, 
                    training techniques, and behavioral advice to help ensure a successful adoption.
                    <br />
                    Events and Fundraisers: Stay updated on upcoming adoption events, fundraisers, 
                    and community outreach programs to participate and show your support.
                    <br />
                    Success Stories: Read heartwarming success stories of dogs who have found loving 
                    forever homes through our organization, inspiring others to adopt.
                    <br />
                    Contact Us: Reach out to us directly for inquiries, questions, or assistance with 
                    adoption processes, volunteering, donations, or other services.</p>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="service-img">
                            <img src={img} alt="" className="img-fluid" />
                            <img src={img2} alt="" className="img-fluid mt-4" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="service-img mt-4 mt-lg-0">
                            <img src={img3} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="service-img mt-4 mt-lg-0">
                            <img src={img4} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-content ps-4 mt-4 mt-lg-0">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
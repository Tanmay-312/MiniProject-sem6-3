/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './index.css';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import ImageHeading from '../../images/about.jpg'
import ImageHeading4 from '../../images/coffeenuts.jpg'
import ImageHeading3 from '../../images/dog in ocean.jpg'
import ImageHeading2 from '../../images/dog in ocean 2.jpg'
import SubHeader from '../Shared/SubHeader';

const About = () => {
    return (
        <>
            <Header />
            <SubHeader title="about us" subtitle="The dog rescue website serves as a digital hub where users can 
                    discover, engage with, and support the welfare of rescued dogs. Through detailed dog profiles, 
                    adoption information, donation opportunities, and educational resources, the website aims 
                    to facilitate the adoption process, raise awareness about responsible pet ownership, and 
                    encourage community involvement. Visitors can explore heartwarming success stories, 
                    volunteer their time, or contribute financially to support the ongoing efforts of the 
                    rescue organization. With a user-friendly interface and informative content, the website 
                    strives to create meaningful connections between adopters and dogs in need, ultimately 
                    enriching the lives of both humans and canines alike." />
            <div className="container" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row p-5">
                    <div className="col-lg-4">
                        <div className='section-title text-center'>
                            <h2 className='text-uppercase'>Our Dog Rescue Success Stories</h2>
                            <p className='para'>Our dog rescue success stories showcase the transformative journey 
                            of dogs who have found their forever homes through our dedicated efforts. Each story 
                            is a testament to the resilience, love, and hope that dogs bring into our lives. 
                            From overcoming adversity to embracing new beginnings, these heartwarming tales 
                            celebrate the profound bond between humans and their furry companions.
                            <br />
                            Through our website, visitors can explore these inspiring narratives, witnessing 
                            the remarkable transformations of once-abandoned or neglected dogs into cherished 
                            family members. From shy rescues finding their confidence to senior dogs experiencing 
                            the joy of a second chance, our success stories highlight the power of compassion 
                            and the profound impact of adoption.
                            <br />
                            These stories not only celebrate the individual journeys of our beloved canine 
                            companions but also serve as a source of inspiration for potential adopters, volunteers, 
                            and donors. They remind us that every dog deserves a chance at happiness and that 
                            through collective effort and compassion, we can make a meaningful difference in 
                            the lives of animals in need.
                            <br /> <br />
                            Join us in celebrating these heartwarming success stories and become part of the 
                            ongoing mission to rescue, rehabilitate, and re-home dogs in need. Together, 
                            we can create more happy endings and ensure that every dog has the opportunity 
                            to live a life filled with love, care, and companionship.</p>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <img src={ImageHeading} alt="" className="img-fluid rounded shadow" />
                        <p><br/><br/></p>
                        <img src={ImageHeading2} alt="" className="img-fluid rounded shadow" />
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className='section-title text-center'>
                            <h2 className='text-uppercase'>Our Achievements</h2>
                            <p className='para'>
                                Our achievements in dog rescue are a testament to our unwavering 
                                commitment to the welfare and well-being of every canine companion 
                                in our care. Through dedication, passion, and collaboration, we have 
                                accomplished significant milestones that have positively impacted the 
                                lives of countless dogs and their adoptive families. Here are some of 
                                our notable achievements:
                                <br />
                                1. Successful Adoptions: We have facilitated the adoption of numerous 
                                rescued dogs, matching them with loving and responsible forever homes 
                                where they can thrive and flourish.
                                <br />
                                2. Life-saving Interventions: Our rescue efforts have led to life-saving 
                                interventions for dogs facing neglect, abuse, or abandonment, providing 
                                them with a second chance at life and love.
                                <br />
                                3. Rehabilitation and Care: We have provided essential medical care, 
                                rehabilitation, and behavioral support to dogs with special needs, 
                                helping them overcome challenges and improve their quality of life.
                                <br />
                                4. Community Engagement: Through outreach programs, educational 
                                initiatives, and community events, we have raised awareness about 
                                responsible pet ownership, animal welfare issues, and the importance 
                                of adoption.
                                <br />
                                5. Volunteer and Supporter Engagement: Our dedicated team of volunteers, 
                                supporters, and donors have played a crucial role in our success, 
                                contributing their time, resources, and expertise to our cause.
                                <br />
                                6. Impactful Partnerships: Collaborations with local shelters, 
                                veterinary clinics, and animal welfare organizations have strengthened 
                                our outreach efforts and expanded our impact within the community.
                                <br />
                                7. Recognition and Awards: Our efforts have been recognized and 
                                celebrated through awards, accolades, and media recognition, 
                                highlighting our commitment to excellence in dog rescue and advocacy.
                                <br /> <br />
                                As we continue our journey towards creating a world where every dog is 
                                valued, cherished, and loved, we remain steadfast in our mission to make 
                                a positive difference in the lives of dogs in need. Together, we 
                                celebrate our achievements and look forward to the countless success 
                                stories yet to come.</p>
                        </div>
                    </div>
                        <div className="col-lg-8">
                            <img src={ImageHeading3} alt="" className="img-fluid rounded shadow" />
                            <p><br/></p>
                            <img src={ImageHeading4} alt="" className="img-fluid rounded shadow" />
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default About
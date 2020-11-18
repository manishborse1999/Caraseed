import React from 'react'
import './css/about.css'
import { FaAddressBook, FaPhoneAlt } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import teamPhoto from '../images/about.jpg'

import useHubspotForm from '@aaronhayes/react-use-hubspot-form';

const About = () => {
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: '7695925',
        formId: '0e28fbb7-619c-4a86-ad09-6cbbdf9b1b70',
        target: '#my-hubspot-form'
    })
    return (
        <div className='about'>
            <h2>About Us</h2>
                 <div className="about__logo">
                    <img src="https://nearmeet.co/footer-logo.png" alt=""/>
                </div>
            <div className="about__content">
                  <img src={teamPhoto} alt=""/>
                <div className="about__description">
                     <p>We at HUMACi are working relentlessly for creating a whole new phase of technology in the AI sector that is more trustful, more human-centered, and accessible by everyone. </p>
                    <p>Human Machine Intelligence aka HUMACi is NASSCOM Incubated start-up based in Bangalore. We build Human-centered empathical AI Solutions, helping various sectors of the economy to grow within their budgets by cost-effective AI solutions and through the deployment of unique design to procure AI-solutions at a global level.</p>
                    <p>HUMACi is an alternative for the development of low-cost AI products. We are working on primary sectors that need low-cost advanced AI solutions as early as possible incorporating Healthcare, Agriculture, Education, Climate change, Automotive, Supply chain, Infrastructure, and Finance.</p>
                     <p>Our team follows the advanced Bot Development Methodology. BDM includes detailed attention on inventing Empathical AI Solutions for smart and easy human interaction and understanding. We majorly invest in ever-changing advanced technology that makes it easier for bots to embrace any industrial change they face.</p>
                    <p>HUMACi provides a consortium of AI products at a remarkably affordable price. We have already enlisted three AI Products using State-of-the-art advanced AI; SALDOI in the field of Supply chain- <a href="https://saldoi.com/" target='_blank'>Saldoi.com</a> , SEED for Agriculture- <a href="https://caraseed.com/" target='_blank'>Caraseed.com</a> , and NearMeet for infrastructure –<a href="https://nearmeet.co/" target='_blank'>Nearmeet.co</a> </p>
                </div>
              
            </div>
              <div className="about__contentTwo">
                  <h2>Connect with us</h2>
                  <div className="about__contentRow">
                       <div className="about__address">
                        
                        <h4><FaAddressBook fontSize='23px'/>Address</h4>
                        <p>S1214, Ardente Office One, Hoodi Junction, ITPL Road, Whitefield 560048.</p>
                        <h4><FaPhoneAlt fontSize='23px' style={{paddingRight:8}} />Lets Talk</h4>
                        <p>+91 9740940998</p>
                        <h4><MdContactMail fontSize='23px' style={{paddingRight:8}} />General Support</h4>
                        <p>enquiry@humaci.com</p>
                    </div>
                    <div className="about__form">
                        <div id='my-hubspot-form'></div>
                    </div>
                  </div>
                   
                </div>
            
        </div>
    )
}

export default About

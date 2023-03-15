import React from 'react'
import hero from "../../assets/images/experience-hero.jpg"
import { FcApproval } from "react-icons/fc"
import experienceShape from "../../assets/images/experience-shape.svg"
import "./Experiences.css"

const Experiences = () => {
    return (
        <div className='experiences-container'>
            <div className="experiences-left">
                <div className="experiences-left-content">
                    <small className="experiences-sub-title">The Best Travel Agency</small>
                    <h1 className="experiences-title">DISCOVER THE <span>WORLD</span> WITH OUR GUIDE</h1>
                    <p className='experices-description'>Since we first opened we have always prioritized the convenience of our users by providing low prices and with a easy process.</p>
                </div>
                <div className="experiences-detail-container">
                    <div className="detail-items">
                        <div className="detail-item">
                            <FcApproval /> <b>20+</b> Years of Experience
                        </div>
                        <div className="detail-item">
                            <FcApproval /> <b>350+</b> Destinations
                        </div>
                        <div className="detail-item">
                            <FcApproval /> <b>80K+</b> Satisfied Customers
                        </div>
                        <div className="detail-item">
                            <FcApproval /> <b>75+</b> Travel Guides
                        </div>
                    </div>
                    <img src={experienceShape} alt="experience" className='experience-shape' />
                </div>
            </div>
            <div className="experiences-right">
                <img src={hero} alt="experinces" className='experiences-image' />
            </div>
        </div>
    )
}

export default Experiences
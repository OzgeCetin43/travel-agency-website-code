import React from 'react'
import hero from "../../assets/images/about.png"
import aboutHero from "../../assets/images/about-hero.jpg"
import { about } from "../../assets/data/about"
import { FcApproval } from "react-icons/fc"
import "./About.css"

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-inner-container'>
                <div className="about-left-container">
                    <h2 className='about-title'>About Us</h2>
                    <p className='about-description'>We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world.</p>
                </div>
                <div className="about-right-container">
                    <img src={hero} alt="about us" />
                </div>
            </div>
            <div className='about-inner-container'>
                <div className="about-left-container">
                    <h2 className='about-title'>Founder</h2>
                    <p className='about-description'>We’re impartial and independent, and every day we create distinctive, world-class programmes and content.</p>
                </div>
            </div>
            <div className='about-us-people'>
                {
                    about.map(person => (
                        <div className="person-item" key={person.id}>
                            <img src={person.image} alt="about" className='person-image' />
                            <h3 className='person-name'>{person.name}</h3>
                            <p className='person-title'>{person.title}</p>
                        </div>
                    ))
                }
            </div>
            <div className='about-content'>
                <div className="about-content-left">
                    <h1 className='about-content-title'>Dare to Explore with Travel Agency</h1>
                    <p className='about-content-description'>We are trusted by our clients and have a reputation for the best services in the field. </p>
                    <div className="about-inner-content">
                        <div className='about-content-item'>
                            <FcApproval /> <span>Quality Services Ensure</span>
                        </div>
                        <div className="about-content-item">
                            <FcApproval /> <span>Customer Care</span>
                        </div>
                        <div className="about-content-item">
                            <FcApproval /> <span>Experience Guides</span>
                        </div>
                        <div className="about-content-item">
                            <FcApproval /> <span>Private Transport</span>
                        </div>
                        <div className="about-content-item">
                            <FcApproval /> <span>Diverse Destinations</span>
                        </div>
                        <div className="about-content-item">
                            <FcApproval /> <span>Great Hotels</span>
                        </div>
                        <div className="about-content-item">
                            <FcApproval /> <span>Fast Booking</span>
                        </div>
                        <div className="progress-bar-container">
                            <h4 className='progress-bar-title'>Best Services</h4>
                            <div className="progress-bar">
                                <div className='best-serevices-progress-bar'><span>82%</span></div>

                            </div>
                            <h4 className='progress-bar-title'>Tour Agents</h4>
                            <div className="progress-bar">
                                <div className='tour-agents-progress-bar'><span>63%</span></div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-content-right">
                    <img src={aboutHero} alt="about us" />
                </div>
            </div>
        </div>
    )
}

export default About
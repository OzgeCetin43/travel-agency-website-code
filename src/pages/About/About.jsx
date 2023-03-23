import React from 'react'
import hero from "../../assets/images/about.png"
import { about } from "../../assets/data/about"
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
            <div className='about-inner-container'>
                <div className="about-left-container">
                    <h2 className='about-title'>Fast Facts</h2>
                    <p className='about-description'>We’re impartial and independent, and every day we create distinctive, world-class programmes and content.</p>
                </div>
            </div>
            <div className='about-us-facts'>
                <div className="fact-item">
                    <h3 className="fact-item-title">2 million</h3>
                    <p className='fact-item-description'>Articles have been public around the world</p>
                </div>
                <div className="fact-item">
                    <h3 className="fact-item-title">100,000+</h3>
                    <p className='fact-item-description'>Registered users account</p>
                </div>
                <div className="fact-item">
                    <h3 className="fact-item-title">350+</h3>
                    <p className='fact-item-description'>Countries and regions have our presence</p>
                </div>
            </div>
        </div>
    )
}

export default About
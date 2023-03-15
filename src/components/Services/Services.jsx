import React from 'react'
import service1 from "../../assets/images/service1.png"
import service2 from "../../assets/images/service2.png"
import service3 from "../../assets/images/service3.png"
import "./Services.css"

const Services = () => {
    return (
        <div className='services-container'>
            <div className="services-items">
                <div className="services-item">
                    <div className="image-container">
                        <img src={service1} alt="service" className='service-image' />
                    </div>
                    <h2 className='service-item-title'>Choose Destination</h2>
                    <p className="services-item-description">Total 350+ destinations that we work with.</p>
                </div>
                <div className="services-item">
                    <div className="image-container">
                        <img src={service2} alt="service" className='service-image' />
                    </div>
                    <h2 className='service-item-title'>Best Tour Guide</h2>
                    <p className="services-item-description">Our tour guide with 20+ years of experience.</p>
                </div>
                <div className="services-item">
                    <div className="image-container">
                        <img src={service3} alt="service" className='service-image' />
                    </div>
                    <h2 className='service-item-title'>Easy Booking</h2>
                    <p className="services-item-description">With an easy and fast ticket purchase.</p>
                </div>
            </div>
        </div>
    )
}

export default Services
import React from 'react'
import hero from "../../assets/images/plan-trip-hero.png"
import logo from "../../assets/images/logo.png"
import { FcApproval } from "react-icons/fc"
import "./PlanTrip.css"

const PlanTrip = () => {
    return (
        <div className="plan-trip-container">
            <div className="plan-trip-left-container">
                <img src={hero} alt="trip" className='plan-trip-image' />
                <div className="discount-container">
                    <div className="discount-label discount"> <span>-30%</span></div>
                </div>
            </div>
            <div className="plan-trip-right-container">
                <div className="plan-trip-content">
                    <small className="plan-trip-sub-title">Where Would You Like To Go?</small>
                    <h1 className="plan-trip-title">Plan Your Trip with <img src={logo} alt="logo" className='trip-logo' /></h1>
                    <p className="plan-trip-description">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.</p>
                    <div className="plan-trip-content-detail">
                        <FcApproval /> <span className='content-detail'>Invest in your simply neighborhood</span>
                    </div>
                    <div className="plan-trip-content-detail">
                        <FcApproval /> <span className='content-detail'>Support people in free text extreme need</span>
                    </div>
                    <div className="plan-trip-content-detail">
                        <FcApproval /> <span className='content-detail'>Largest global industrial business community</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PlanTrip
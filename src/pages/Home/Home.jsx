import React from 'react'
import { GiCommercialAirplane } from "react-icons/gi"
import { TiArrowSortedUp } from "react-icons/ti"
import hero from "../../assets/images/hero.png"
import CTA from '../../components/CTA/CTA'
import Destinations from '../../components/Destinations/Destinations'
import Experiences from '../../components/Experiences/Experiences'
import Gallery from '../../components/Gallery/Gallery'
import PlanTrip from '../../components/PlanTrip/PlanTrip'
import Services from '../../components/Services/Services'
import "./Home.css"

const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="home-container-left">
                    <div className="home-container-left-content">
                        <small className="home-container-sub-title">Hot Places <GiCommercialAirplane /></small>
                        <h1 className="home-container-title">Journey to <b>Explore</b> World</h1>
                        <p className='home-container-description'>We always make our customer happy by providing as many choices as possible.</p>
                        <div className='video-container'>
                            <div className="home-video" />
                            <TiArrowSortedUp className='home-video-arrow' />
                            <div className="home-video-description">Watch Our Travel</div>
                        </div>
                        <div className='home-container-actions'>
                            <button className='trip-button'>Plan a Trip</button>
                            <button className='book-button'>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="home-container-right">
                    <img src={hero} alt="hero" className='hero' />
                </div>
            </div>
            <Services />
            <Destinations />
            <Experiences />
            <PlanTrip />
            <Gallery />
            <CTA />
        </>
    )
}

export default Home
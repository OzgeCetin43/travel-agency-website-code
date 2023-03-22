import React, { useEffect, useState } from 'react'
import destination1 from "../../assets/images/destination1.png"
import destination2 from "../../assets/images/destination2.png"
import destination3 from "../../assets/images/destination3.png"
import "./DestinationsDetail.css"

const DestinationsDetail = () => {
    const [dataRevealElements, setDataRevealElements] = useState(null);
    const revealElements = document.querySelectorAll("[data-reveal]");

    const scrollReveal = () => {
        for (let i = 0; i < dataRevealElements?.length; i++) {
            const isElementsVisible = dataRevealElements[i].getBoundingClientRect().top < window.innerHeight;

            if (isElementsVisible) {
                dataRevealElements[i].classList.add("reveal")
            }

            else {
                dataRevealElements[i].classList.remove("reveal");
            }
        }
    }

    useEffect(() => {
        setDataRevealElements(revealElements);
        scrollReveal();
        window.addEventListener("scroll", scrollReveal);
    }, [revealElements])

    return (
        <div className='destinations-detail-container'>
            <div className='destinations-detail-image-box' data-reveal="left">
                <img src={destination1} alt="destination" className='destinations-detail-image' />
            </div>
            <div className="destinations-detail-content-box">
                <h2 className='destinations-detail-title' data-reveal="left">France</h2>
                <p className='destinations-detail-description' data-reveal="left">France is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20%</p>
            </div>
            <div className="destinations-detail-content-box">
                <h2 className='destinations-detail-title' data-reveal="left">Italy</h2>
                <p className='destinations-detail-description' data-reveal>Italy is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20%</p>
            </div>
            <div className='destinations-detail-image-box' data-reveal="right">
                <img src={destination2} alt="destination" className='destinations-detail-image' />
            </div>
            <div className='destinations-detail-image-box' data-reveal="left">
                <img src={destination3} alt="destination" className='destinations-detail-image' />
            </div>
            <div className="destinations-detail-content-box">
                <h2 className='destinations-detail-title' data-reveal="left">Singapore</h2>
                <p className='destinations-detail-description' data-reveal="left">Singapore is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20%</p>
            </div>
        </div>
    )
}

export default DestinationsDetail
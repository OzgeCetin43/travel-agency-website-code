import React, { useEffect, useState } from 'react'
import { slider } from "../../assets/data/slider"
import "./Slider.css"

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentSlide === 2) {
                setCurrentSlide(0);
            }

            else {
                setCurrentSlide(prev => prev + 1);
            }

            return () => clearTimeout(timer);
        }, 8000)
    }, [currentSlide])

    const bgImageSlider = {
        backgroundImage: `url(${slider[currentSlide].image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100%"
    }

    return (
        <div className='slider-container'>
            <div style={bgImageSlider} />
            <div className='transparent-background'></div>
            <div className='slider-description'>
                <div>
                    <h1>{slider[currentSlide].title}</h1>
                    <p>{slider[currentSlide].description}</p>
                </div>
            </div>
        </div>
    )

}

export default Slider
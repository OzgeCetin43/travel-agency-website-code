import React from 'react'
import NewsLetter from '../NewsLetter/NewsLetter'
import Testimonials from '../Testimonials/Testimonials'
import "./CTA.css"

const CTA = () => {
    return (
        <div className='cta-container'>
            <div className="cta-left-container">
                <Testimonials />
            </div>
            <div className="cta-right-container">
                <NewsLetter />
            </div>
        </div>
    )
}

export default CTA
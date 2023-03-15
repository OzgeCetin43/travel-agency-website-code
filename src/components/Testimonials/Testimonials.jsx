import React from 'react'
import testimonial1 from "../../assets/images/testimonial-1.png"
import testimonial2 from "../../assets/images/testimonial-2.png"
import testimonial3 from "../../assets/images/testimonial-3.png"
import "./Testimonials.css"

const Testimonials = () => {
    return (
        <div className='testimonials-container'>
            <div className="carousel">
                <input type="radio" name='slide' id='indicator1' />
                <input type="radio" name='slide' id='indicator2' />
                <input type="radio" name='slide' id='indicator3' />
                <div className="carousel-items">
                    <div className="carousel-item">
                        <div className="carousel-caption">
                            <img src={testimonial1} alt="testimonial" />
                            <h2>Jane Doe</h2>
                            <p className='carousel-item-description'>This place is great! I had a very pleasant stay here. Great stuff and beautiful suites with a fabulous view etiam rhoncus maecenas!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                            <img src={testimonial2} alt="testimonial" />
                            <h2>Jane Doe</h2>
                            <p className='carousel-item-description'>This place is great! I had a very pleasant stay here. Great stuff and beautiful suites with a fabulous view etiam rhoncus maecenas!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                            <img src={testimonial3} alt="testimonial" />
                            <h2>Jane Doe</h2>
                            <p className='carousel-item-description'>This place is great! I had a very pleasant stay here. Great stuff and beautiful suites with a fabulous view etiam rhoncus maecenas!</p>
                        </div>
                    </div>
                </div>
                <div className='indicators'>
                    <label htmlFor="indicator1"></label>
                    <label htmlFor="indicator2"></label>
                    <label htmlFor="indicator3"></label>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
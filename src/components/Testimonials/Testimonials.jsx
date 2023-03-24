import React from 'react'
import { testimonials } from '../../assets/data/testimonials'
import "./Testimonials.css"

const Testimonials = () => {
    return (
        <div className='testimonials-container'>
            <div className="carousel">
                <input type="radio" name='slide' id='indicator1' defaultChecked />
                <input type="radio" name='slide' id='indicator2' />
                <input type="radio" name='slide' id='indicator3' />
                <div className="carousel-items">
                    {
                        testimonials.map(testimonial => (
                            <div className="carousel-item" key={testimonial.id}>
                                <div className="carousel-caption">
                                    <img src={testimonial.image} alt="testimonial" />
                                    <h2>Jane Doe</h2>
                                    <p className='carousel-item-description'>This place is great! I had a very pleasant stay here. Great stuff and beautiful suites with a fabulous view etiam rhoncus maecenas!</p>
                                </div>
                            </div>
                        ))
                    }
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
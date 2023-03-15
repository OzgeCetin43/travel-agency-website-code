import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
    return (
        <div className='news-letter-container'>
            <h3 className='news-letter-title'>Join Newsletter</h3>
            <form action="/">
                <div className="form-box">
                    <div className="input-box">
                        <input type="text" required />
                        <span>Your Name</span>
                    </div>
                    <div className="input-box">
                        <input type="text" required />
                        <span>Your E-mail</span>
                    </div>
                    <button className='join-us-button'>Join Us</button>
                </div>
            </form>
        </div>
    )
}

export default NewsLetter
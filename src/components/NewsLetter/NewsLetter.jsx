import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
    return (
        <div className='news-letter-container'>
            <h3 className='news-letter-title'>Join Newsletter</h3>
            <form action="/">
                <div className="news-letter-form-box">
                    <div className="input-box">
                        <input type="text" required placeholder='Your Name' />
                    </div>
                    <div className="input-box">
                        <input type="text" required placeholder='E-mail' />
                    </div>
                    <button className='join-us-button'>Join Us</button>
                </div>
            </form>
        </div>
    )
}

export default NewsLetter
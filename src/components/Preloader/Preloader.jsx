import React from 'react'
import logo from "../../assets/images/logo.png"
import "./Preloader.css"

const Preloader = () => {
    return (
        <div className='preloader' data-preloader>
            <div className="preloader-inner">
                <img src={logo} alt="logo" className='preloader-image' />
            </div>
        </div>
    )
}

export default Preloader
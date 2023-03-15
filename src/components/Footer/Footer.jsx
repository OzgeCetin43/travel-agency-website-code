import React from 'react'
import { CgSmartphone } from "react-icons/cg"
import { SiGmail } from "react-icons/si"
import { FaMapMarkerAlt } from "react-icons/fa"
import logo from "../../assets/images/logo.png"
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer-outer-container'>
            <div className="footer-inner-container">
                <div className="footer-logo-container">
                    <img src={logo} alt="logo" className='footer-logo-image' />
                    <p className='since-text'>Since: 2023</p>
                </div>
                <div className='footer-items-container'>
                    <h3 className='footer-item-title'>Information</h3>
                    <ul className='footer-items'>
                        <li className="footer-item">
                            <p className='footer-item-description'>About Company</p>
                        </li>
                        <li className="footer-item">
                            <p className='footer-item-description'>Online Query</p>
                        </li>
                        <li className="footer-item">
                            <p className='footer-item-description'>Become Partner</p>
                        </li>
                        <li className="footer-item">
                            <p className='footer-item-description'>Help & Support</p>
                        </li>
                        <li className="footer-item">
                            <p className='footer-item-description'>Contact Channels</p>
                        </li>
                    </ul>
                </div>
                <div className='footer-items-container'>
                    <h3 className='footer-item-title'>Destinations</h3>
                    <ul className='footer-items'>
                        <li className="footer-item">
                            <p className='footer-item-description'>France - Italy</p>
                        </li>
                        <li className="footer-item">
                            <p className='footer-item-description'>Singapore - Bangladesh</p>
                        </li>
                        <li className="footer-item">
                            <p className='footer-item-description'>Dubai - Africa </p>
                        </li>
                        <li className="footer-item">
                            <p className='footer-item-description'>Thailand</p>
                        </li>
                        <li className="footer-item">
                            <p className='footer-item-description'>Mexico</p>
                        </li>
                    </ul>
                </div>
                <div className='footer-items-container'>
                    <h3 className='footer-item-title'>Reach Us</h3>
                    <ul className='footer-items'>
                        <li className="footer-item">
                            <p className='footer-item-description'>
                                <CgSmartphone /> +90 000 00 00
                            </p>
                        </li>
                        <li className="footer-item">
                            <p className='footer-item-description'>
                                <SiGmail /> info@test.com
                            </p>
                        </li>
                        <li className="footer-item">
                            <p className='footer-item-description'>
                                <FaMapMarkerAlt /> İzmir / Turkey
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import "./Login.css"

const Login = () => {
    return (
        <div className='login-container'>
            <div className="login-inner-container">
                <div className="login-container-content">
                    <h2 className='login-title'>Welcome to Our Travel Agency Website</h2>
                    <div>
                        <FaLinkedinIn />
                        <FaFacebookF />
                        <FaInstagram />
                    </div>
                </div>
                <div className="login-area-container">
                    <div className="form-box login">
                        <form action="#">
                            <h2 className='sign-in-title'>Sign In</h2>
                            <p className='sign-in-description'>Sign in your account</p>
                            <div className="login-input-container">
                                <input type="email" required placeholder='E-mail' />
                            </div>
                            <div className="login-input-container">
                                <input type="password" placeholder='Password' />
                            </div>
                            <div className="remember-me-container">
                                <div>
                                    <input type="checkbox" className='login-check-box' />
                                    <span className='remember-text'>Remember me</span>
                                </div>
                                <NavLink to="/travel-agency-website/login" className='forgot-password'>Forgot Password</NavLink>
                            </div>
                            <NavLink to="/travel-agency-website/" className="sign-in-button">Sign In</NavLink>
                            <div className="login-register">
                                <p>Don't have an account?</p>
                                <NavLink to='/travel-agency-website/login' className='register-link'>Sign Up</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Login
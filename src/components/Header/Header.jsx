import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import { BiCross } from "react-icons/bi"
import { CgMenuGridR } from "react-icons/cg"
import "./Header.css"

const Header = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-navigation");
    }

    return (
        <header className='header'>
            <img src={logo} alt="logo" className='logo' />
            <nav className='navigation' ref={navRef}>
                <NavLink to="/travel-agency-website/">Home</NavLink>
                <NavLink to="/travel-agency-website/login">Login</NavLink>
                <button className='nav-button nav-close-button' onClick={showNavbar}>
                    <BiCross />
                </button>
            </nav>
            <button className='nav-button' onClick={showNavbar}>
                <CgMenuGridR />
            </button>
        </header>
    )
}

export default Header
import React, { useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.png'

const Navbar = () => {
    return (
        <nav className='container dark-nav'>
            <img src={logo} alt="" className='logo' />
            <ul>
                <li>Home</li>
                <li>Programs</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact Us</button></li>
            </ul>
        </nav>
    )
}

export default Navbar


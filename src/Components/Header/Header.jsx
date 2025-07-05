import React, { useState } from 'react';

import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo.svg'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="myNav">
                <div className="container">
                    <div className="myNav_content">
                        <div className="logo"><Link to="/"><img src={logo} className='img-fluid' loading='lazy' alt="logo" /></Link></div>
                        <div className="menu">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/About">About us</Link></li>
                                <li><Link to="/Property">our projects</Link></li>
                                <li><Link to="/Blogs">Blogs</Link></li>
                                <li><Link to="/Contact">Contact us</Link></li>
                            </ul>
                        </div>
                        <div className="menu_icon" onClick={() => setIsMenuOpen(true)}>
                            <i class="fa-solid fa-bars"></i>
                        </div>

                    </div>
                </div>
            </div>

            {/* mobile navbar */}
            <div className={`mobile_nav ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile_nav__content">
                    <div className="mobile_header">
                        <div className="logo">
                            <Link to="/"><img src={logo} className='img-fluid' loading='lazy' alt="logo" /></Link>
                        </div>
                        <div className="cancel_btn" onClick={() => setIsMenuOpen(false)}>
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="mobile_menu">
                        <ul>
                            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                            <li><Link to="/About">About us</Link></li>
                            <li><Link to="/Property" onClick={() => setIsMenuOpen(false)}>our properties</Link></li>
                            <li><Link to="/Blogs">Blogs</Link></li>
                            <li><Link to="/Contact">Contact us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
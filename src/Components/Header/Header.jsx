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
                            <li><Link to="/About" onClick={() => setIsMenuOpen(false)}>About us</Link></li>
                            <li><Link to="/Property" onClick={() => setIsMenuOpen(false)}>our properties</Link></li>
                            <li><Link to="/Blogs">Blogs</Link></li>
                            <li><Link to="/Contact" onClick={() => setIsMenuOpen(false)}>Contact us</Link></li>
                        </ul>
                    </div>
                    <div className="office_map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19536.216528717694!2d77.08022522207696!3d28.621041796514344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04ba6b064d0f%3A0xf609cdf712fe603e!2sJanakpuri%2C%20New%20Delhi%2C%20Delhi!5e1!3m2!1sen!2sin!4v1751720782506!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="social_icon">
                        <h6>connect with us :</h6>
                        <div className="social_icon__list">
                            <Link to="/"><i class="fa-brands fa-facebook-f"></i></Link>
                            <Link to="/"><i class="fa-brands fa-instagram"></i></Link>
                            <Link to="/"><i class="fa-brands fa-youtube"></i></Link>
                            <Link to="/"><i class="fa-brands fa-linkedin"></i></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header
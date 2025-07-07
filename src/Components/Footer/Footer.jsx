import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';
import apple from '../../assets/apple.svg'
import googleplay from '../../assets/googleplay.svg'
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <>
            <section className='footer_top'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6">
                            <div className="footer_top__left">
                                <h3>Become a Real Estate Agent</h3>
                                <p>We only work with the best companies around the globe</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="footer_top__right">
                                <Link to='/'>Sign in or create an account <i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="main_footer global_wrapper">
                    <div className="container">
                        <div className="footer_header">
                            <div className="footer_logo">
                                <Link to="/"><img src={logo} className='img-fluid' loading='lazy' alt="logo" /></Link>
                            </div>
                            <div className="social_icons">
                                <h3>Follow Us :</h3>
                                <Link to="/"><i class="fa-brands fa-facebook-f"></i></Link>
                                <Link to="/"><i class="fa-brands fa-instagram"></i></Link>
                                <Link to="/"><i class="fa-brands fa-youtube"></i></Link>
                                <Link to="/"><i class="fa-brands fa-linkedin"></i></Link>
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="footer_left">
                                    <h3>Subscribe</h3>
                                    <div className="newslatter">
                                        <input type="text" placeholder='Your e-mail' />
                                        <button className='global_btn'>Send <i class="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                    <p>Subscribe to our newsletter to receive our weekly
                                        feed.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-6">
                                <div className="footer_box">
                                    <h3>Discover</h3>
                                    <div className="footer_links">
                                        <Link to="/">Miami</Link >
                                        <Link to="/">  New York</Link >
                                        <Link to="/">  Chicago</Link >
                                        <Link to="/">  Florida</Link >
                                        <Link to="/">  Los Angeles</Link >
                                        <Link to="/">  San Diego</Link>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-6">
                                <div className="footer_box">
                                    <h3>Quick Links</h3>
                                    <div className="footer_links">
                                        <Link to='/About'>About</Link>
                                        <Link to='/Contact'>Contact</Link>
                                        <Link>FAQ’s</Link>
                                        <Link>Blog</Link>
                                        <Link>Pricing Plans</Link>
                                        <Link>Privacy Policy</Link>
                                        <Link>Terms & Conditions</Link>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-6">
                                <div className="footer_box">
                                    <h3>Contact Us</h3>
                                    <div className="footer_links">
                                        <Link className='text-lowercase'><i class="fa-solid fa-envelope"></i> info@vrdigital.com</Link>
                                        <Link><i class="fa-solid fa-phone-volume"></i>9784563210</Link>

                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6">
                                <div className="footer_box app_link">
                                    <h3>Get the app</h3>
                                    <div className="footer_links">
                                        <Link><img src={apple} className='img-fluid' loading='lazy' alt="apple_icon" /></Link>
                                        <Link><img src={googleplay} className='img-fluid' loading='lazy' alt="googleplay" /></Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright © 2024. Ahuja Legacy Advisor</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
import React from 'react'
import { Link } from 'react-router-dom';
import './Contact.css'
import '../PropertyDetails/PropertyDetails.css'
import '../../Components/Breadcrumb/Breadcrumb.css'
import breadcrumb from '../../assets/breadcrumb.png';
import building from '../../assets/building.png';
import './Contact.css'


const Contact = () => {
    return (
        <>
            <div className="breadcrumb_wrapper">
                <div className="breadcrumb_wrapper__img">
                    <img src={breadcrumb} className='img-fluid' loading='lazy' alt="breadcrumb_img" />
                </div>
                <div className="breadcrumb_content mybreadcrumb">
                    <h2>Contact Us</h2>
                </div>

            </div>

            <section className='contact_wrapper global_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact_img">
                                <img src={building} className='img-fluid' loading='lazy' alt="building" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-form">
                                <h3>Have questions let’s talk!</h3>
                                <div className="enquiry_form">
                                    <input type="text" placeholder='Your Name' />
                                    <input type="email" placeholder='Your email address' />
                                    <input type="number" placeholder='Your phone number' />
                                    <textarea rows={4} cols={4} placeholder='Hello, I am interested in [Coprportate Office]'></textarea>
                                    <button className='global_btn'>request information</button>
                                </div>
                                <div className="property_features">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4889.775557802628!2d77.08643597651225!3d28.497801090184375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1939aa6004ef%3A0x3240c4c9cab262ab!2sCyber%20City%2C%20DLF%20Tower%208th%20Rd%2C%20DLF%20Cyber%20City%2C%20DLF%20Phase%202%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122002!5e1!3m2!1sen!2sin!4v1751869288789!5m2!1sen!2sin"
                                            width="100%"
                                            height="210"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
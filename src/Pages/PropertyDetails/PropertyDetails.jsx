import React from 'react'
import GlobalBreadcrumb from '../../Components/GlobalBreadcrumb/GlobalBreadcrumb'
import { Link } from 'react-router-dom';
import './PropertyDetails.css';
import office1 from '../../assets/office2.jpg';

const PropertyDetails = () => {
    return (
        <>
            <GlobalBreadcrumb />
            <section className='property_details global_wrapper back_bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="property_details__left">
                                <div className="property_parra">
                                    <h3>Coporate office in Cyber City (Gurgaon)</h3>
                                    <p>Step into luxury with this beautifully designed 3-bedroom apartment located in the heart of Sydney. Featuring an open-plan layout, floor-to-ceiling windows, and breathtaking harbor views, this property is perfect for modern living. The master suite comes with a private balcony and en-suite bathroom, while the contemporary kitchen boasts high-end appliances
                                    </p>
                                    <p>We guide you through the entire home-buying process, from searching for properties to negotiating the best deal. With access to exclusive listings and market insights, we’ll help you find the perfect place to call home. Your perfect property is just a click away.
                                    </p>
                                </div>
                                <div className="property_video">
                                    <h6>Property Video</h6>
                                    <div className="property_iframe">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/JRA9gPUyoIg?si=V11yjjNJIDYHKk2_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                </div>
                                <div className="property_info">
                                    <h6>Office Details</h6>
                                    <div className="property_info__list">
                                        <ul>
                                            <li><span>Property ID:</span> #0596</li>
                                            <li><span>Price:</span> ₹84,200 / month</li>
                                            <li><span>Garages:</span> 2</li>
                                            <li><span>Garage Size:</span> 80 sq ft</li>
                                            <li><span>Lot Size:</span> 9500 sq ft</li>
                                            <li><span>Bedrooms:</span> 3</li>
                                            <li><span>Manager Rooms:</span> 3</li>
                                            <li><span>CEO Room:</span> 2</li>
                                            <li><span>Floor Area:</span> 1,900 sq ft</li>
                                            <li><span>Parking Spaces:</span> 3</li>
                                            <li><span>Property Status:</span> For Rent</li>
                                            <li><span>Property Type:</span> Office</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="property_info">
                                    <h6>Amenities and Features</h6>
                                    <div className="property_features">
                                        <ul>
                                            <li>Airconditioning</li>
                                            <li>   Balcony </li>
                                            <li>   Basketball</li>
                                            <li>   ElectricRange</li>
                                            <li>  Fireplace</li>
                                            <li>  Garage</li>
                                            <li>  Internet</li>
                                            <li>  Refrigerator</li>
                                            <li>  Tanis Courts</li>
                                            <li>  Washer</li>
                                            <li>  Window Coverings</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="property_info">
                                    <h6>Location</h6>
                                    <div className="property_features">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4889.775557802628!2d77.08643597651225!3d28.497801090184375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1939aa6004ef%3A0x3240c4c9cab262ab!2sCyber%20City%2C%20DLF%20Tower%208th%20Rd%2C%20DLF%20Cyber%20City%2C%20DLF%20Phase%202%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122002!5e1!3m2!1sen!2sin!4v1751869288789!5m2!1sen!2sin"
                                            width="100%"
                                            height="450"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="property_details__right">
                                <h3>₹84,200 <span> / month</span></h3>
                                <div className="enquiry_box">
                                    <h6>For Enquiry</h6>
                                    <p>For more information or to schedule a private showing, please contact</p>
                                    <div className="enquiry_form">
                                        <input type="text" placeholder='Your Name' />
                                        <input type="email" placeholder='Your email address' />
                                        <input type="number" placeholder='Your phone number' />
                                        <textarea rows={4} cols={4} placeholder='Hello, I am interested in [Coprportate Office]'></textarea>
                                        <button className='global_btn'>request information</button>
                                    </div>
                                </div>

                                <div className="property_find">
                                    <div className="property_find__img">
                                        <img src={office1} className='img-fluid' loading='lazy' alt="iffice_img" />
                                    </div>
                                    <div className="property_find__content">
                                        <h6>Didn’t find what you’re looking for?</h6>
                                        <Link to='/Property'>Explore Property</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PropertyDetails
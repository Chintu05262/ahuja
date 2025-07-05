import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import map from '../../assets/map.png';
import './Property.css';
import property1 from '../../assets/office1.jpg';
import property2 from '../../assets/office2.jpg';
import property3 from '../../assets/office3.jpg';


const Property = () => {
    const properties = [
        {
            id: 1,
            title: "Candor TechSpace",
            city: "Noida",
            price: "₹22,80,000",
            image: property1,
        },
        {
            id: 2,
            title: "Sunshine Residency",
            city: "Gurgaon",
            price: "₹45,50,000",
            image: property2,
        },
        {
            id: 3,
            title: "Green Valley Heights",
            city: "Delhi",
            price: "₹65,00,000",
            image: property3,
        },
        {
            id: 4,
            title: "Green Valley Heights",
            city: "Delhi",
            price: "₹65,00,000",
            image: property1,
        },
        {
            id: 1,
            title: "Candor TechSpace",
            city: "Noida",
            price: "₹22,80,000",
            image: property1,
        },
        {
            id: 2,
            title: "Sunshine Residency",
            city: "Gurgaon",
            price: "₹45,50,000",
            image: property2,
        },
        {
            id: 3,
            title: "Green Valley Heights",
            city: "Delhi",
            price: "₹65,00,000",
            image: property3,
        },
        {
            id: 4,
            title: "Green Valley Heights",
            city: "Delhi",
            price: "₹65,00,000",
            image: property1,
        },
        {
            id: 2,
            title: "Sunshine Residency",
            city: "Gurgaon",
            price: "₹45,50,000",
            image: property2,
        },
    ];

    return (
        <>
            <Breadcrumb />

            <section className='property_wrapper global_wrapper'>
                <div className="container">
                    <div className="row">
                        {properties.map((property) => (
                            <div className=" col-lg-4 col-6" key={property.id}>
                                <div className="proeprty_box">
                                    <div className="proeprty_box__img">
                                        <img src={property.image} className="img-fluid" loading="lazy" alt="property_img" />
                                        <div className="proeprty_box__img-btn">
                                            <span className="sale">FOR SALE</span>
                                            <span className="featured">FEATURED</span>
                                        </div>
                                    </div>
                                    <div className="proeprty_box__content">
                                        <h3>{property.title}</h3>
                                        <p>
                                            <img src={map} className="img-fluid" loading="lazy" alt="map" />
                                            {property.city}
                                        </p>
                                        <div className="property_bottom">
                                            <h6>{property.price}</h6>
                                            <Link to="/" className='global_btn'>Property Details <i className="fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="property_pagination">
                        <Link to="/"><i class="fa-solid fa-chevron-left"></i></Link>
                        <Link to="#" className='active_btn'>1</Link>
                        <Link to="#">2</Link>
                        <Link to="#">3</Link>
                        <Link to="#">4</Link>
                        <Link to="#"><i class="fa-solid fa-chevron-right"></i></Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Property;

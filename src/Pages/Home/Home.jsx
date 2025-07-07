import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Home.css';
import Testimonials from '../../Components/Testimonials/Testimonials';


import video1 from '../../assets/video1.mp4';
import logo1 from '../../assets/logo1.webp';
import logo2 from '../../assets/logo2.webp';
import logo3 from '../../assets/logo3.jpg';
import logo4 from '../../assets/logo4.webp';
import logo5 from '../../assets/logo5.jpg';
import logo6 from '../../assets/logo6.png';
import logo7 from '../../assets/logo7.png';
import logo8 from '../../assets/logo8.png';
import map from '../../assets/map.png';
import property1 from '../../assets/office1.jpg';
import property2 from '../../assets/office2.jpg';
import property3 from '../../assets/office3.jpg';


import home1 from '../../assets/home1.png';
import home2 from '../../assets/home2.png';
import cta from '../../assets/cta.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    dots: false,
    focusOnSelect: false,
    cssEase: 'linear',
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 3 } }
    ]
  };

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  const propertySettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  };

  const propertyData = [
    {
      id: 1,
      image: property1,
      title: 'Candor TechSpace',
      city: 'Noida',
      price: '₹22,80,000',

    },
    {
      id: 2,
      image: property2,
      title: 'DLF Cyber Park',
      city: 'Gurgaon',
      price: '₹35,00,000',

    },
    {
      id: 3,
      image: property3,
      title: 'Mindspace Malad',
      city: 'Mumbai',
      price: '₹42,50,000',

    },
    {
      id: 4,
      image: cta,
      title: 'RMZ Infinity',
      city: 'Bangalore',
      price: '₹28,75,000',

    },
  ];


  return (
    <>
      <section className='banner_wrapper'>
        <div className="banner_img">
          <video
            src={video1}
            loop
            muted
            autoPlay
            playsInline
            loading="lazy"
          />
        </div>
        <div className="banner_content">
          <h1>The <span>#1</span> site real estate professionals trust*</h1>
          <p>From as low as $10 per day with limited time offer discounts.</p>
          <div className="banner_form">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <input type="text" placeholder='Enter Keywords' />
            <div className="fiter_btn" onClick={() => setIsFilterOpen(true)}>
              <button className='global_btn'>Filter</button>
            </div>
            <div className="search_btn">
              <button className='global_btn'>Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* property filter */}
      <div className={`propertyFilter ${isFilterOpen ? 'active' : ''}`} >
        <div className="propertyFilter_box">
          <div className="propertyFilter_box__header">
            <h3>filter</h3>
            <div className="filter_cancel" onClick={() => setIsFilterOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className="filterInfo">
            <div className="filterInfo_box">
              <h6>Price:</h6>
              <div className="filterInfo_box__list">
                <div className="price_box">
                  <label>Min:</label>
                  <input type="number" placeholder='₹25,000' />

                  <label>Max:</label>
                  <input type="number" placeholder='₹100,000' />
                </div>
              </div>
            </div>

            <div className="filterInfo_box">
              <h6>Amenties:</h6>
              <div className="filterInfo_box__list">
                <div className="list_box">
                  <input type="checkbox" />
                  <label>Airconditioning</label>
                </div>
                <div className="list_box">
                  <input type="checkbox" />
                  <label>Kitchen</label>
                </div>
                <div className="list_box">
                  <input type="checkbox" />
                  <label>Balcony</label>
                </div>

                <div className="list_box">
                  <input type="checkbox" />
                  <label>Internet</label>
                </div>
                <div className="list_box">
                  <input type="checkbox" />
                  <label>Refrigerator</label>
                </div>
                <div className="list_box">
                  <input type="checkbox" />
                  <label>Electric Range</label>
                </div>



              </div>
            </div>
            <div className="filterInfo_box">
              <h6>Area in (Sqft):</h6>
              <div className="filterInfo_box__list">
                <div className="list_box">
                  <input type="checkbox" />
                  <label>500</label>
                </div>
                <div className="list_box">
                  <input type="checkbox" />
                  <label>1000</label>
                </div>
                <div className="list_box">
                  <input type="checkbox" />
                  <label>1500</label>
                </div>

                <div className="list_box">
                  <input type="checkbox" />
                  <label>2000</label>
                </div>
                <div className="list_box">
                  <input type="checkbox" />
                  <label>2500</label>
                </div>
                <div className="list_box">
                  <input type="checkbox" />
                  <label>3000</label>
                </div>
                <div className="list_box">
                  <input type="checkbox" />
                  <label>3500</label>
                </div>
                <div className="list_box">
                  <input type="checkbox" />
                  <label>4000+</label>
                </div>



              </div>
            </div>
            <div className="filterInfo_box">
              <h6>Floor:</h6>
              <div className="filterInfo_box__list">
                <div className="list_box">
                  <input type="checkbox" />
                  <label>1st</label>
                </div>
                <div className="list_box">
                  <input type="checkbox" />
                  <label>2nd</label>
                </div>
                <div className="list_box">
                  <input type="checkbox" />
                  <label>3rd</label>
                </div>

                <div className="list_box">
                  <input type="checkbox" />
                  <label>4th</label>
                </div>
                <div className="list_box">
                  <input type="checkbox" />
                  <label>5th</label>
                </div>
                <div className="list_box">
                  <input type="checkbox" />
                  <label>6th</label>
                </div>
              </div>
            </div>
          </div>

          <div className="filter_btn">
            <button className='global_btn'>check</button>
          </div>
        </div>
      </div>

      {/* Trusted Section */}
      <section className='trusted_wrapper'>
        <div className="container">
          <div className="trusted_wrapper__content">
            <div className="trusted_heading">
              <h2>Trusted by the world’s leading organizations↓</h2>
            </div>
            <div className="global_content">
              <div className="trusted_slider">
                <Slider {...settings}>
                  {logos.map((logo, index) => (
                    <div className="trusted_box" key={index}>
                      <img src={logo} className="img-fluid" loading="lazy" alt={`logo_${index + 1}`} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* property */}
      <section className='property_wrapper global_wrapper'>
        <div className="container">
          <div className="property_wrapper__content">
            <div className="main_heading">
              <h2>Featured Commercial Property for Lease in Gurgaon</h2>
            </div>
            <div className="global_content">
              <div className="property_slider">
                <Slider {...propertySettings}>
                  {propertyData.map((property) => (
                    <div className="proeprty_box" key={property.id}>
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
                          <Link to="/" className='global_btn'>Property Details <i class="fa-solid fa-arrow-right"></i></Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* property */}
      <section className='property_wrapper global_wrapper'>
        <div className="container">
          <div className="property_wrapper__content">
            <div className="main_heading">
              <h2>Featured Projects</h2>
            </div>
            <div className="global_content">
              <div className="property_slider">
                <Slider {...propertySettings}>
                  {propertyData.map((property) => (
                    <div className="proeprty_box" key={property.id}>
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
                          <Link to="/" className='global_btn'>Property Details <i class="fa-solid fa-arrow-right"></i></Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className='cta_wrapper'>
        <div className="cta_wrapper__img">
          <img src={cta} className='img-fluid' loading='lazy' alt="cta_img" />
        </div>
        <div className="cta_content">
          <h2>Discover a place you'll love to live</h2>
          <p>Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam</p>
          <div className="myBtn">
            <Link to="/" className='global_btn'>View properties <i className="fa-solid fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>


      <Testimonials />

      {/* looking for home */}
      <section className='looking_wrapper global_wrapper'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="looking_box" style={{ backgroundColor: '#f9f9f9' }}>
                <div className="home_img">
                  <img src={home1} alt="home_img" className='img-fluid' loading='lazy' />
                </div>
                <h3>Looking for the new <br /> home?</h3>
                <p>10 new offers every day. 350 offers on site, trusted by
                  a community of thousands of users.</p>
                <div className="myBtn">
                  <a href="#" className='global_btn'>get started <i class="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="looking_box looking_two" style={{ backgroundColor: '#FFF8F6' }}>
                <div className="home_img">
                  <img src={home2} alt="home_img" className='img-fluid' loading='lazy' />
                </div>
                <h3>Want to sell your <br /> home?</h3>
                <p>10 new offers every day. 350 offers on site, trusted by
                  a community of thousands of users.</p>
                <div className="myBtn">
                  <a href="#" className='global_btn'>get started <i class="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;

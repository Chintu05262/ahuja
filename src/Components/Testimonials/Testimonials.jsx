import React from 'react'
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.png';

import quaote from '../../assets/quaote.png';
import './Testimonials.css'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonials = () => {
    const testimonialSettings = {
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };
    const testimonials = [
        {
            name: "Manya Rai",
            location: "New Delhi, India",
            image: user1,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            name: "Vaibhav Pandey",
            location: "New Delhi, India",
            image: user2,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            name: "Julie Chaudhary",
            location: "New Delhi, India",
            image: user3,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            name: "deepak gupta",
            location: "New Delhi, India",
            image: user4,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
    ]


    return (
        <div className='testimonial_wrapper global_wrapper back_bg'>
            <div className="container">
                <div className="testimonial_wrapper__content">
                    <div className="main_heading">
                        <h2>What our customers are saying us?</h2>
                    </div>
                    <div className="global_content">
                        <Slider  {...testimonialSettings} className="testimonial_slider">
                            {testimonials.map((t, index) => (
                                <div className="testimonial_box" key={index}>
                                    <div className="quaote_icon">
                                        <img src={quaote} className='img-fluid' alt="quote_icon" />
                                    </div>
                                    <div className="user">
                                        <div className="user_img">
                                            <img src={t.image} className='img-fluid' loading='lazy' alt="t.name" />
                                        </div>
                                        <div className="user_info">
                                            <h3>{t.name}</h3>
                                            <p>{t.location}</p>
                                        </div>
                                    </div>
                                    <div className="testimonial_parra">
                                        <p>{t.text}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
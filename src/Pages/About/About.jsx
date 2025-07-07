import React from 'react'
import { Link } from 'react-router-dom';
import '../PropertyDetails/PropertyDetails.css'
import '../../Components/Breadcrumb/Breadcrumb.css'
import breadcrumb from '../../assets/breadcrumb.png';
import './About.css';
import about from '../../assets/office3.jpg';
import mission from '../../assets/mission.jpg';
import vision from '../../assets/vision.jpg';
import Testimonials from '../../Components/Testimonials/Testimonials';


const About = () => {
  return (
    <>
      <div className="breadcrumb_wrapper">
        <div className="breadcrumb_wrapper__img">
          <img src={breadcrumb} className='img-fluid' loading='lazy' alt="breadcrumb_img" />
        </div>
        <div className="breadcrumb_content mybreadcrumb">
          <h2>About Us</h2>
        </div>

      </div>

      <section className='about_wrapper global_wrapper'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about_img">
                <img src={about} className='img-fluid' loading='lazy' alt="about_img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <h3>Who we are</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, qui molestias commodi tempore aspernatur perspiciatis saepe! Odit ipsam natus nemo, assumenda suscipit, eaque similique maxime tempore temporibus, facere et architecto.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, ea iste? Recusandae quos commodi magni perferendis eum vitae, eos neque nesciunt, tenetur voluptatibus, sapiente qui. Sed aliquid, ab esse aliquam laboriosam autem voluptatibus dignissimos optio harum maxime minus, sapiente repellendus.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur nihil laudantium unde est eius in at quod temporibus aliquam, aut qui, quae nobis odio omnis distinctio. Natus, iusto ut.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='about_wrapper global_wrapper back_bg'>
        <div className="container">
          <div className="row myflex">
           
            <div className="col-lg-6">
              <div className="about_content">
                <h3>our mission</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, qui molestias commodi tempore aspernatur perspiciatis saepe! Odit ipsam natus nemo, assumenda suscipit, eaque similique maxime tempore temporibus, facere et architecto.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, ea iste? Recusandae quos commodi magni perferendis eum vitae, eos neque nesciunt, tenetur voluptatibus, sapiente qui. Sed aliquid, ab esse aliquam laboriosam autem voluptatibus dignissimos optio harum maxime minus, sapiente repellendus.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur nihil laudantium unde est eius in at quod temporibus aliquam, aut qui, quae nobis odio omnis distinctio. Natus, iusto ut.</p>
              </div>
            </div>
             <div className="col-lg-6">
              <div className="about_img">
                <img src={mission} className='img-fluid' loading='lazy' alt="about_img" />
              </div>
            </div>
          </div>
        </div>
      </section>
       <section className='about_wrapper global_wrapper'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about_img">
                <img src={vision} className='img-fluid' loading='lazy' alt="about_img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <h3>our vision</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, qui molestias commodi tempore aspernatur perspiciatis saepe! Odit ipsam natus nemo, assumenda suscipit, eaque similique maxime tempore temporibus, facere et architecto.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, ea iste? Recusandae quos commodi magni perferendis eum vitae, eos neque nesciunt, tenetur voluptatibus, sapiente qui. Sed aliquid, ab esse aliquam laboriosam autem voluptatibus dignissimos optio harum maxime minus, sapiente repellendus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

        <Testimonials />
    </>
  )
}

export default About
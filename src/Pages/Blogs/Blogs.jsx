import React from 'react'
import { Link } from 'react-router-dom'
import './Blogs.css';
import blogs1 from '../../assets/office1.jpg';
import blogs2 from '../../assets/office2.jpg';
import blogs3 from '../../assets/office3.jpg';


const Blogs = () => {
    const blogs = [
        {
            id: 1,
            date: '05.05.2025',
            image: blogs1,
            title: "blogs dummy title one",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis consequuntur nobis explicabo quas eum",
        },
        {
            id: 2,
            date: '10.05.2025',
            image: blogs2,
            title: "blogs dummy title one",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis consequuntur nobis explicabo quas eum",
        },
        {
            id: 3,
            date: '20.05.2025',
            image: blogs3,
            title: "blogs dummy title one",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis consequuntur nobis explicabo quas eum",
        },
        {
            id: 1,
            date: '05.05.2025',
            image: blogs1,
            title: "blogs dummy title one",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis consequuntur nobis explicabo quas eum",
        },
        {
            id: 2,
            date: '10.05.2025',
            image: blogs2,
            title: "blogs dummy title one",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis consequuntur nobis explicabo quas eum",
        },
        {
            id: 3,
            date: '20.05.2025',
            image: blogs3,
            title: "blogs dummy title one",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis consequuntur nobis explicabo quas eum",
        },
        {
            id: 1,
            date: '05.05.2025',
            image: blogs1,
            title: "blogs dummy title one",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis consequuntur nobis explicabo quas eum",
        },
        {
            id: 2,
            date: '10.05.2025',
            image: blogs2,
            title: "blogs dummy title one",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis consequuntur nobis explicabo quas eum",
        },
        {
            id: 3,
            date: '20.05.2025',
            image: blogs3,
            title: "blogs dummy title one",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis consequuntur nobis explicabo quas eum",
        },
    ]
    return (
        <>
            <div className="breadcrumb_wrapper">
                <div className="breadcrumb_content mybreadcrumb">
                    <h2>Blogs</h2>
                </div>
            </div>

            <section className='blogs_wrapper global_wrapper'>
                <div className="container">
                    <div className="row">
                        {blogs.map((blog) => (

                            <div className="col-lg-4 col-sm-6" key={blog.id}>
                                <div className="blogs_box">
                                    <div className="blogs_box__img">
                                        <img src={blog.image} className='img-fluid' loading='lazy' alt="blogs_img" />
                                        <span>{blog.date}</span>
                                    </div>
                                    <div className="blogs_box__content">
                                        <h3>{blog.title}</h3>
                                        <p>{blog.text}</p>
                                        <Link to="/BlogsDetials">Read More</Link>
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
    )
}

export default Blogs
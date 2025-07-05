import React from 'react'
import { Link } from 'react-router-dom';
import breadcrumb from '../../assets/breadcrumb.png';
import './Breadcrumb.css'
const Breadcrumb = () => {
    return (
        <>
            <div className="breadcrumb_wrapper">
                <div className="breadcrumb_wrapper__img">
                    <img src={breadcrumb} className='img-fluid' loading='lazy' alt="breadcrumb_img" />
                </div>
                <div className="breadcrumb_content">
                    <h2>Property</h2>
                </div>
                <div className="property_form">
                    <div className="banner_form">
                        <select className="form-select" aria-label="Default select example">
                            <option defaultValue>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <input type="text" placeholder='Enter Keywords' />
                        <div className="fiter_btn">
                            <button className='global_btn'>Filter</button>
                        </div>
                        <div className="search_btn">
                            <button className='global_btn'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb
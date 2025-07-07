import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './Breadcrumb.css'
const Breadcrumb = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <>
            <div className="breadcrumb_wrapper">

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
                        <div className="fiter_btn" onClick={() => setIsFilterOpen(true)}>
                            <button className='global_btn'>Filter</button>
                        </div>
                        <div className="search_btn">
                            <button className='global_btn'>Search</button>
                        </div>
                    </div>
                </div>


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
            </div>
        </>
    )
}

export default Breadcrumb
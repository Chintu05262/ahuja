import React from 'react'
import '../Breadcrumb/Breadcrumb.css'
import '../GlobalBreadcrumb/GlobalBreadcrumb.css'
import breadcrumb from '../../assets/breadcrumb.png';

const GlobalBreadcrumb = () => {
    return (
        <>
            <div className="breadcrumb_wrapper">
                <div className="breadcrumb_wrapper__img">
                    <img src={breadcrumb} className='img-fluid' loading='lazy' alt="breadcrumb_img" />
                </div>
                <div className="breadcrumb_content mybreadcrumb">
                    <h2>Coporate office in Cyber City (Gurgaon)</h2>
                </div>

            </div>
        </>
    )
}

export default GlobalBreadcrumb
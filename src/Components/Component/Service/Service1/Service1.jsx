import React from 'react'
import { Link } from 'react-router-dom'
import './Service.css'

const Service = () => {
  return (
    <section className="service-section-3 pb-0 fix section-padding bg-cover" 
    // style="background-image: url('assets/img/service/service-bg-3.jpg');"
    >
    <div className="container">
        <div className="section-title-area">
            <div className="section-title">
                <span>What We Do</span>
                <h2>
                    We Solve IT Problems <br/> With Technology
                </h2>
            </div>
            <Link to="service.html" className="theme-btn">
                See all Services
                <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
        </div>
        <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="service-card-items">
                    <div className="service-image">
                        <img src="assets/img/service/06.jpg" alt="service-img"/>
                    </div>
                    <div className="icon-2">
                        <img src="assets/img/service/icon/s-icon-1.svg" alt="img"/>
                    </div>
                    <div className="service-content">
                        <div className="icon">
                            <img src="assets/img/service/icon/s-icon-1.svg" alt="img"/>
                        </div>
                        <h4>
                            <Link to="service-details.html">Web Development</Link>
                        </h4>
                        <p>
                            accumsan. Pellentesque in magna tincidunt, this is.
                        </p>
                        <Link to="service-details.html" className="theme-btn-2 mt-3">
                            read More
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="service-card-items">
                    <div className="service-image">
                        <img src="assets/img/service/07.jpg" alt="service-img"/>
                    </div>
                    <div className="icon-2">
                        <img src="assets/img/service/icon/s-icon-2.svg" alt="img"/>
                    </div>
                    <div className="service-content">
                        <div className="icon">
                            <img src="assets/img/service/icon/s-icon-2.svg" alt="img"/>
                        </div>
                        <h4>
                            <Link to="service-details.html">Ecommerce Solution</Link>
                        </h4>
                        <p>
                            accumsan. Pellentesque in magna tincidunt, this is.
                        </p>
                        <Link to="service-details.html" className="theme-btn-2 mt-3">
                            read More
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="service-card-items">
                    <div className="service-image">
                        <img src="assets/img/service/08.jpg" alt="service-img"/>
                    </div>
                    <div className="icon-2">
                        <img src="assets/img/service/icon/s-icon-4.svg" alt="img"/>
                    </div>
                    <div className="service-content">
                        <div className="icon">
                            <img src="assets/img/service/icon/s-icon-5.svg" alt="img"/>
                        </div>
                        <h4>
                            <Link to="service-details.html">App Development</Link>
                        </h4>
                        <p>
                            accumsan. Pellentesque in magna tincidunt, this is.
                        </p>
                        <Link to="service-details.html" className="theme-btn-2 mt-3">
                            read More
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="service-card-items">
                    <div className="service-image">
                        <img src="assets/img/service/09.jpg" alt="service-img"/>
                    </div>
                    <div className="icon-2">
                        <img src="assets/img/service/icon/s-icon-3.svg" alt="img"/>
                    </div>
                    <div className="service-content">
                        <div className="icon">
                            <img src="assets/img/service/icon/s-icon-3.svg" alt="img"/>
                        </div>
                        <h4>
                            <Link to="service-details.html">Digital Marketing</Link>
                        </h4>
                        <p>
                            accumsan. Pellentesque in magna tincidunt, this is.
                        </p>
                        <Link to="service-details.html" className="theme-btn-2 mt-3">
                            read More
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="cta-banner-2 section-padding">
        <div className="container">
            <div className="cta-wrapper-2">
                <div className="author-icon">
                    <div className="icon">
                         <i className="fa-solid fa-phone"></i>
                    </div>
                     <div className="content">
                         <span>Call Us Now</span>
                         <h4>
                             <Link to="tel:+2085550112">+208-555-0112</Link>
                         </h4>
                     </div>
                </div>
                <h3>
                    Stay Connected With <br/> Cutting Edge IT
                </h3>
                <Link to="contact.html" className="theme-btn bg-white">
                    get A Quote
                    <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
            </div>
        </div>
    </div>
</section>
  )
}

export default Service

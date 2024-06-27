import React, { useState } from 'react'
import './About1.css'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const About = () => {

    const [counterOn, setCounterOn] = useState(true);

    return (
        <section className="about-section section-padding fix bg-cover">
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="about-image">
                                <div className="shape-image">
                                    <img src="assets/img/about/shape.png" alt="shape-img" />
                                </div>
                                <div className="circle-shape">
                                    <img src="assets/img/about/circle.png" alt="shape-img" />
                                </div>
                                <img src="assets/img/about/07.jpg" alt="about-img" />
                                <div className="content">
                                    <h2>
                                        <span className="count">
                                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

                                        </ScrollTrigger>
                                            {counterOn && <CountUp
                                                    start={0}
                                                    end={150}
                                                    duration={4}
                                                />
                                            }</span>+
                                    </h2>
                                    <span>Satisfied Clients</span>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="about-content">
                                <div className="section-title">
                                    <span className="wow fadeInUp">ABOUT INFOTECK</span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        We Can Clients with the <br /> About Solution
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    It is a long established fact that a reader will be distracted the readable <br /> content of a page when looking at layout the point.It is a long established fact that a reader will be distracted the readable <br /> content of a page when looking at layout the point.
                                </p>

                                <div className="about-author">
                                    <div className="about-button wow fadeInUp" data-wow-delay=".8s">
                                        <Link to="about.html" className="theme-btn">
                                            Explore More
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </Link>
                                    </div>
                                    <div className="author-icon wow fadeInUp" data-wow-delay=".9s">
                                        <div className="icon">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="content">
                                            <span>Call Us Now</span>
                                            <h5>
                                                <Link to="tel:+2085550112">+208-555-0112</Link>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

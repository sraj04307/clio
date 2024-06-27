import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header>
            {/* <div className="header-top-section top-style-3">
                <div className="container">
                    <div className="header-top-wrapper">
                        <ul className="contact-list">
                            <li>
                                <i className="far fa-envelope"></i>
                                <Link to="mailto:info@example.com" className="link">info@example.com</Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-phone-volume"></i>
                                <Link to="tel:2086660112">+208-666-0112</Link>
                            </li>
                        </ul>
                        <div className="top-right">
                            <div className="flag-wrap">
                                <div className="flag">
                                    <img src="assets/img/flag.png" alt="flag" />
                                </div>
                                <div className="nice-select" tabindex="0">
                                    <span className="current">
                                        English
                                    </span>
                                    <ul className="list">
                                        <li data-value="1" className="option selected focus">
                                            English
                                        </li>
                                        <li data-value="1" className="option">
                                            Bangla
                                        </li>
                                        <li data-value="1" className="option">
                                            Hindi
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="social-icon d-flex align-items-center">
                                <span>Follow Us:</span>
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                                <Link to="#"><i className="fa-brands fa-youtube"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div id="header-sticky" className="header-3">
                <div className="plane-shape">
                    <img src="assets/img/plane.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="header-left">
                                <div className="logo">
                                    <Link to="/" className="header-logo">
                                        <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                                    </Link>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="mean__menu-wrapper">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-dropdown active menu-thumb">
                                                    <NavLink to="/">
                                                        Home
                                                    </NavLink>
                                                </li>

                                                <li>
                                                    <NavLink>
                                                        Our Story
                                                        <i className="fas fa-angle-down"></i>
                                                    </NavLink>
                                                    <ul className="submenu">
                                                        <li><Link to="about">About Us</Link></li>
                                                        <li><Link to="/">Our Journey</Link></li>
                                                        <li><Link to="blog">Blog</Link></li>
                                                        <li><Link to="happyclient">Our Happy Client</Link></li>
                                                        <li><Link to="clienttestimonial">Client Testimonial</Link></li>
                                                        <li><Link to="/">Our Experts</Link></li>
                                                    </ul>
                                                </li>

                                                <li className="has-dropdown">
                                                    <NavLink to="service">
                                                        Our Service
                                                        <i className="fas fa-angle-down"></i>
                                                    </NavLink>
                                                    <ul className="submenu">
                                                        <li className="has-dropdown">
                                                            <Link to="/">
                                                                Graphics Designing
                                                                <i className="fas fa-angle-down"></i>
                                                            </Link>
                                                            <ul className="submenu">
                                                                <li><Link to="#">Website Designing</Link></li>
                                                                <li><Link to="#">Logo Designing</Link></li>
                                                                <li><Link to="#">Product Designing</Link></li>
                                                                <li><Link to="#">Social Media Creative Designing</Link></li>

                                                            </ul>
                                                        </li>
                                                        <li className="has-dropdown">
                                                            <Link to="team.html">
                                                                Web Development
                                                                <i className="fas fa-angle-down"></i>
                                                            </Link>
                                                            <ul className="submenu">
                                                                <li><Link href="#">Static Website Development</Link></li>
                                                                <li><Link href="#">CMS Development</Link></li>
                                                                <li><Link href="#">WordPress Development</Link></li>
                                                                <li><Link href="#">PHP Development</Link></li>
                                                                <li><Link href="#">CodeIgniter Development</Link></li>
                                                                <li><Link href="#">CakePHP Development</Link></li>
                                                                <li><Link href="#">Laravel Development</Link></li>
                                                                <li><Link href="#">Angular JS Development</Link></li>
                                                                <li><Link href="#">WIX Development</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="has-dropdown">
                                                            <Link to="team.html">
                                                                E-commerce Solution
                                                                <i className="fas fa-angle-down"></i>
                                                            </Link>
                                                            <ul className="submenu">
                                                                <li><Link href="#">WooCommerce Development</Link></li>
                                                                <li><Link href="#">Magento Development</Link></li>
                                                                <li><Link href="#">Shopify Development</Link></li>
                                                                <li><Link href="#">OpenCart Development</Link></li>
                                                                <li><Link href="#">Custom E-commerce Development</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="has-dropdown">
                                                            <Link to="team.html">
                                                                Digital Marketing
                                                                <i className="fas fa-angle-down"></i>
                                                            </Link>
                                                            <ul className="submenu">
                                                                <li><Link href="#">Search Engine Optimization (SEO)</Link></li>
                                                                <li><Link href="#">Social Media Optimization (SMO)</Link></li>
                                                                <li><Link href="#">Social Media Marketing (SMM)</Link></li>
                                                                <li><Link href="#">Google Ad Campaign</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="has-dropdown">
                                                            <Link to="team.html">
                                                                App Development
                                                                <i className="fas fa-angle-down"></i>
                                                            </Link>
                                                            <ul className="submenu">
                                                                <li><Link href="#">Android App Development</Link></li>
                                                                <li><Link href="#">iOS App Development</Link></li>
                                                                <li><Link href="#">Hybrid App Development</Link></li>
                                                                <li><Link href="#">Native App Development</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <Link to="team.html">
                                                                GPS Tracking Solution

                                                            </Link>

                                                        </li>
                                                        <li>
                                                            <Link to="team.html">
                                                                Web Accessibility

                                                            </Link>

                                                        </li>
                                                        <li>
                                                            <Link to="team.html">
                                                                IOT Development

                                                            </Link>

                                                        </li>

                                                    </ul>
                                                </li>

                                                <li>
                                                <NavLink to="news.html">
                                                        Industries
                                                    </NavLink>
                                                </li>
                                               
                                                <li>
                                                    <NavLink to="contact.html">Portfolio</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to="contact">Contact Us</NavLink>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                {/* <Link to="#0" className="search-trigger search-icon"><i className="fal fa-search"></i></Link> */}
                                <div className="header-button">
                                    <Link to="contact.html" className="theme-btn bg-white">
                                        <span>
                                            get A Quote
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </span>
                                    </Link>
                                </div>
                                <div className="header__hamburger d-lg-none my-auto">
                                    <div className="sidebar__toggle">
                                        <i className="fas fa-bars"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

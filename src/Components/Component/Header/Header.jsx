import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import img from '../../../assets/img/logo/img1.png'

const Header = () => {
    return (
        <header>
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
                                        <img src={img} className='logo' alt="logo-img" />
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
                                                        <li><Link to="blog">Blog</Link></li>
                                                        <li><Link to="happyclient">Our Happy Client</Link></li>
                                                        <li><Link to="clienttestimonial">Client Testimonial</Link></li>
                                                        <li><Link to="ourexperts">Our Experts</Link></li>
                                                    </ul>
                                                </li>

                                                <li className="has-dropdown">
                                                    <NavLink to="service">
                                                        Our Service
                                                        <i className="fas fa-angle-down"></i>
                                                    </NavLink>
                                                    <ul className="submenu">
                                                        <li className="has-dropdown">
                                                            <Link >
                                                                Graphics Designing
                                                                <i className="fas fa-angle-down"></i>
                                                            </Link>
                                                            <ul className="submenu">
                                                                <li><Link to="websitedesign">Website Designing</Link></li>
                                                                <li><Link to="logodesign">Logo Designing</Link></li>
                                                                <li><Link to="productdesign">Product Designing</Link></li>
                                                                <li><Link to="socialmediacreativedesign">Social Media Creative Designing</Link></li>

                                                            </ul>
                                                        </li>
                                                        <li className="has-dropdown">
                                                            <Link>
                                                                Web Development
                                                                <i className="fas fa-angle-down"></i>
                                                            </Link>
                                                            <ul className="submenu">
                                                                <li><Link to="staticebsitedevelopment">Static Website Development</Link></li>
                                                                <li><Link to="cmsdevelopment">CMS Development</Link></li>
                                                                <li><Link to="wordpressdevelopment">WordPress Development</Link></li>
                                                                <li><Link to="phpdevelopment">PHP Development</Link></li>
                                                                <li><Link to="codeignitorevelopment">CodeIgniter Development</Link></li>
                                                                <li><Link to="cakephpdevelopment">CakePHP Development</Link></li>
                                                                <li><Link to="laraveldevelopment">Laravel Development</Link></li>
                                                                <li><Link to="angularjsdevelopment">Angular JS Development</Link></li>
                                                                <li><Link to="wixdevelopment">WIX Development</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="has-dropdown">
                                                            <Link>
                                                                E-commerce Solution
                                                                <i className="fas fa-angle-down"></i>
                                                            </Link>
                                                            <ul className="submenu">
                                                                <li><Link to="wocommercedevelopment">WooCommerce Development</Link></li>
                                                                <li><Link to="magentodevelopment">Magento Development</Link></li>
                                                                <li><Link to="shopifydevelopment">Shopify Development</Link></li>
                                                                <li><Link to="opencartdevelopment">OpenCart Development</Link></li>
                                                                <li><Link to="customecommercedevelopment">Custom E-commerce Development</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="has-dropdown">
                                                            <Link to="team.html">
                                                                Digital Marketing
                                                                <i className="fas fa-angle-down"></i>
                                                            </Link>
                                                            <ul className="submenu">
                                                                <li><Link to="seo">Search Engine Optimization (SEO)</Link></li>
                                                                <li><Link to="smo">Social Media Optimization (SMO)</Link></li>
                                                                <li><Link to="smm">Social Media Marketing (SMM)</Link></li>
                                                                <li><Link to="googlead">Google Ad Campaign</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="has-dropdown">
                                                            <Link>
                                                                App Development
                                                                <i className="fas fa-angle-down"></i>
                                                            </Link>
                                                            <ul className="submenu">
                                                                <li><Link to="androiddevelopment">Android App Development</Link></li>
                                                                <li><Link to="iosdevelopment">iOS App Development</Link></li>
                                                                <li><Link to="hybridappdevelopment">Hybrid App Development</Link></li>
                                                                <li><Link to="nativeappdevelopment">Native App Development</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <Link to="gps">
                                                                GPS Tracking Solution

                                                            </Link>

                                                        </li>
                                                        <li>
                                                            <Link to="web">
                                                                Web Accessibility

                                                            </Link>

                                                        </li>
                                                        <li>
                                                            <Link to="iot">
                                                                IOT Development

                                                            </Link>

                                                        </li>

                                                    </ul>
                                                </li>

                                                <li>
                                                <NavLink to="industries">
                                                        Industries
                                                    </NavLink>
                                                </li>
                                               
                                                <li>
                                                    <NavLink to="portfolio">Portfolio</NavLink>
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

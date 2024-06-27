import React from 'react'
import { Link } from 'react-router-dom'

const Card1 = () => {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="news-card-items style-2 mt-0 pb-0">
                <div className="news-image">
                    <img src="assets/img/news/blog.jpg" alt="news-img" />
                    <div className="post-date">
                        <h3>
                            17 <br />
                            <span>Feb</span>
                        </h3>
                    </div>
                </div>
                <div className="news-content">
                    <ul>
                        <li>
                            <i className="fa-regular fa-user"></i>
                            By Admin
                        </li>
                        <li>
                            <i className="fa-solid fa-tag"></i>
                            IT Services
                        </li>
                    </ul>
                    <h3>
                        <Link to="news-details.html">Simplify Streamline Succeed  IT Solutions</Link>
                    </h3>
                    <Link to="blogdetails" className="theme-btn-2 mt-3">
                        read More
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Card1

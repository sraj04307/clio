import React from 'react'
import { Link } from 'react-router-dom'

const Card2 = (props) => {
  return (
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
                <Link to="service-details.html">{props.title}</Link>
            </h4>
            <p>
               {props.desc}
            </p>
            <Link to="service-details.html" className="theme-btn-2 mt-3">
                read More
                <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
        </div>
    </div>
</div>
  )
}

export default Card2

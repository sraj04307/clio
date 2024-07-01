import React, {useState, useEffect} from 'react'
import './Card3.css'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/img/teams/Person 1.jpg'

const Card3 = ({id}) => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    
    <div className={'col-xl-3 col-lg-4 col-md-6 wow fadeInUp card3 p-2'} data-wow-delay=".3s">
                        <div className={isScrolled?`single-team-items active ${id}` : `single-team-items`}>
                            <div className="team-image">
                                <img src={img1} alt="team-img"/>
                                <div className="social-profile">
                                    <ul>
                                        <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="#"><i className="fa-brands fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                        
                                    </ul>
                                    <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                </div>
                            </div>
                            <div className="team-content text-center">
                                <h3>
                                    <Link to="team-details.html">Marvin McKinney</Link>
                                </h3>
                                <p>Web Designer</p>
                            </div>
                        </div>
                    </div>
  )
}

export default Card3

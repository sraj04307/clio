import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/img/teams/Person 1.jpg'
import img2 from '../../../assets/img/teams/Person 2.jpg'
import img3 from '../../../assets/img/teams/Person 3.jpg'
import img4 from '../../../assets/img/teams/Person 4.jpg'
import './Teams.css'


const Teams = ({props}) => {


    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 1300) { 
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
    <section className="team-section-3 fix section-padding section-bg">
            <div className="line-shape">
                <img src="assets/img/team/line-shape.png" alt="shape-img"/>
            </div>
            <div className="mask-shape">
                <img src="assets/img/team/mask-shape-2.png" alt="shape-img"/>
            </div>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <span className={isScrolled?"wow fadeInUp active":'wow fadeInUp '}>Team Members</span>
                        <h2 className={isScrolled?"wow fadeInUp active":'wow fadeInUp '} data-wow-delay=".3s">
                            Our Dedicated Team <br/> Members
                        </h2>
                    </div>
                    <Link to="team.html" className={isScrolled?"theme-btn wow fadeInUp active":'theme-btn wow fadeInUp'} data-wow-delay=".5s">
                        All Member
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                </div>
                <div className="row">
                    <div className={isScrolled?"col-xl-3 col-lg-4 col-md-6 wow fadeInUp card1 active":'col-xl-3 col-lg-4 col-md-6 wow fadeInUp card1'} data-wow-delay=".3s">
                        <div className="single-team-items">
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
                    <div className={isScrolled?"col-xl-3 col-lg-4 col-md-6 wow fadeInUp card2 active":'col-xl-3 col-lg-4 col-md-6 wow fadeInUp card2'} data-wow-delay=".5s">
                    <div className="single-team-items">
                            <div className="team-image">
                                <img src={img2} alt="team-img"/>
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
                    <div className={isScrolled?"col-xl-3 col-lg-4 col-md-6 wow fadeInUp card3 active":'col-xl-3 col-lg-4 col-md-6 wow fadeInUp card3'} data-wow-delay=".7s">
                    <div className="single-team-items">
                            <div className="team-image">
                                <img src={img3} alt="team-img"/>
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
                    <div className={isScrolled?"col-xl-3 col-lg-4 col-md-6 wow fadeInUp card4 active":'col-xl-3 col-lg-4 col-md-6 wow fadeInUp card4'} data-wow-delay=".9s">
                    <div className="single-team-items">
                            <div className="team-image">
                                <img src={img4} alt="team-img"/>
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
                </div>
            </div>
        </section>
  )
}

export default Teams

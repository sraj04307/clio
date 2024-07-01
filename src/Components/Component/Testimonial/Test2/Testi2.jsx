import React, {useState, useEffect} from 'react'
import './Testi2.css'


const Testi2 = ({id}) => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) { 
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
    <div className="col-lg-6 p-2 testi2">
      <div className={isScrolled?`testi2-card active ${id}`:'testi2-card'}>
        <div className="testimonial-box-items">
          <div className="icon">
            <img src="assets/img/testimonial/icon.png" alt="icon-img" />
          </div>
          <div className="client-items">
            <div className="client-image style-2 bg-cover"
            ></div>
            <div className="client-content">
              <h4>Kathryn Murphy</h4>
              <p>Web Designer</p>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
          <p>
            Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”
          </p>
        </div>
      </div>

    </div>
  )
}

export default Testi2

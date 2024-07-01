import React,{useEffect, useState} from 'react'
import img1 from '../../../../assets/img/world-map.png'
import './World.css'

const World = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 3200) { 
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
        <section className='section-padding world-section'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                    <span className={isScrolled ? "active" : 'non-active'}>Footprints</span>
                    <h2 className={isScrolled ? "active" : 'non-active'}>Our Footprints In Countries</h2>
                    </div>
                    <div className="col-12 map" >
                        <img src={img1} alt="" class={isScrolled ? "w-100 img1 active" : 'w-100 img1 non-active'}/>
                        <div className={isScrolled ? 'loc1 loc active' : 'loc1 loc'}>
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <a href="/">Location 1</a>
                            </div>
                        </div>
                        <div className={isScrolled ? 'loc2 loc active' : 'loc2 loc'}>
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <a href="/">Location 2</a>
                                
                            </div>
                        </div>
                        <div className={isScrolled ? 'loc3 loc active' : 'loc3 loc'}>
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <a href="/">Location 3</a>
                                
                            </div>
                        </div>
                        <div className={isScrolled ? 'loc4 loc active' : 'loc4 loc'}>
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <a href="/">Location 4</a>
                                
                            </div>
                        </div>
                        <div className={isScrolled ? 'loc5 loc active' : 'loc5 loc'}>
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <a href="/">Location 5</a>
                                
                            </div>
                        </div>
                        <div className={isScrolled ? 'loc6 loc active' : 'loc6 loc'}>
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <a href="/">Location 6</a>
                                
                            </div>
                        </div>
                        <div className={isScrolled ? 'loc7 loc active' : 'loc7 loc'}>
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <a href="/">Location 7</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default World

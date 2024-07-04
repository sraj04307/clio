import React, { useEffect, useState } from 'react'
import img1 from '../../../../assets/img/vecteezy_world-map_1198030.png'
// import img2 from '../../../../assets/img/google-maps.png'
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
                        <h2 className={isScrolled ? "active" : ''}>Our Footprints</h2>
                    </div>
                    <div className="col-12 map" >
                        {/* <div className="overlay">

                        </div> */}
                        <div className='map'>
                            <img src={img1} alt="" className={isScrolled?'active':''} />
                            <div className={isScrolled ?'pin1 active':'pin1'}>
                                <i class="fa-solid fa-location-dot"></i>
                                <div className='location'>
                                    <h6>USA</h6>
                                    <span>
                                        2+ Clients</span>
                                    <br />
                                    <span>
                                        10+ Projects Completed</span>
                                </div>
                            </div>

                            <div className={isScrolled ?'pin2 active':'pin2'}>
                                <i class="fa-solid fa-location-dot"></i>
                                <div className='location'>
                                    <h6>UK</h6>
                                    <span>2+ Client</span>
                                    <br />
                                    <span>10+ Project</span>
                                </div>
                            </div>

                            <div className={isScrolled ?'pin3 active':'pin3'}>
                                <i class="fa-solid fa-location-dot"></i>
                                <div className='location'>
                                    <h6>Africa</h6>
                                    <span>2+ Client</span>
                                    <br />
                                    <span>10+ Project</span>
                                </div>
                            </div>

                            <div className={isScrolled ?'pin4 active':'pin4'}>
                                <i class="fa-solid fa-location-dot"></i>
                                <div className='location'>
                                    <h6>Dubai</h6>
                                    <span>2+ Client</span>
                                    <br />
                                    <span>10+ Project</span>
                                </div>
                            </div>

                            <div className={isScrolled ?'pin5 active':'pin5'}>
                                <i class="fa-solid fa-location-dot"></i>
                                <div className='location'>
                                    <h6>India</h6>
                                    <span>2+ Client</span>
                                    <br />
                                    <span>10+ Project</span>
                                </div>
                            </div>
                            <div className={isScrolled ?'pin6 active':'pin6'}>
                                <i class="fa-solid fa-location-dot"></i>
                                <div className='location'>
                                    <h6>Phillipines</h6>
                                    <span>2+ Client</span>
                                    <br />
                                    <span>10+ Project</span>
                                </div>
                            </div>
                            <div className={isScrolled ?'pin7 active':'pin7'}>
                                <i class="fa-solid fa-location-dot"></i>
                                <div className='location'>
                                    <h6>Africa</h6>
                                    <span>2+ Client</span>
                                    <br />
                                    <span>10+ Project</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default World

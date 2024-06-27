import React from 'react'
import img1 from '../../../../assets/img/world-map.png'
import './World.css'

const World = () => {
    return (
        <section className='section-padding'>
            <div className="container">
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-6 map" >
                        <img src={img1} alt="" className='w-100 img1' />
                        <div className='loc1 loc'>
                            <i class="fa-solid fa-location-dot"></i>
                            <div>
                                <a href="/">Location 1</a>
                            </div>
                        </div>
                        <div className='loc2 loc'>
                            <i class="fa-solid fa-location-dot"></i>
                            <div>
                                <a href="/">Location 1</a>
                                
                            </div>
                        </div>
                        <div className='loc3 loc'>
                            <i class="fa-solid fa-location-dot"></i>
                            <div>
                                <a href="/">Location 1</a>
                                
                            </div>
                        </div>
                        <div className='loc4 loc'>
                            <i class="fa-solid fa-location-dot"></i>
                            <div>
                                <a href="/">Location 1</a>
                                
                            </div>
                        </div>
                        <div className='loc5 loc'>
                            <i class="fa-solid fa-location-dot"></i>
                            <div>
                                <a href="/">Location 1</a>
                                
                            </div>
                        </div>
                        <div className='loc6 loc'>
                            <i class="fa-solid fa-location-dot"></i>
                            <div>
                                <a href="/">Location 1</a>
                                
                            </div>
                        </div>
                        <div className='loc7 loc'>
                            <i class="fa-solid fa-location-dot"></i>
                            <div>
                                <a href="/">Location 1</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default World

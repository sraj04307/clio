import React,{useState} from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import './Achivement.css'

const Achivement = () => {

    const [counterOn, setCounterOn] = useState(true);
  return (
    <section className="achievement-section-3 fix section-bg-2">
    <div className="shape-image">
        <img src="assets/img/achiv-shape.png" alt="shape-img"/>
    </div>
    <div className="container">
        <div className="achievement-wrapper style-2">
            <div className="section-title mb-0 w-100 text-center">
                <span className="text-white wow fadeInUp w-100">achievement</span>
                <h2 className="text-white wow fadeInUp w-100" data-wow-delay=".3s">
                    Why Choose Us
                </h2>
            </div>
            <div className="counter-area">
                <div className="counter-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="icon">
                        <img src="assets/img/achievement-icon/01.svg" alt="icon-img"/>
                    </div>
                    <div className="content">
                        <h2><span className="count">
                                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

                                        </ScrollTrigger>
                                            {counterOn && <CountUp
                                                    start={0}
                                                    end={1000}
                                                    duration={8}
                                                />
                                            }</span>+</h2>
                        <p>Satisfied Clients</p>
                    </div>
                </div>
                <div className="counter-items wow fadeInUp" data-wow-delay=".5s">
                    <div className="icon">
                        <img src="assets/img/achievement-icon/02.svg" alt="icon-img"/>
                    </div>
                    <div className="content">
                        <h2><span className="count">
                                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

                                        </ScrollTrigger>
                                            {counterOn && <CountUp
                                                    start={0}
                                                    end={2250}
                                                    duration={8}
                                                />
                                            }</span>+</h2>
                        <p>Finished Projects</p>
                    </div>
                </div>
                <div className="counter-items wow fadeInUp" data-wow-delay=".7s">
                    <div className="icon">
                        <img src="assets/img/achievement-icon/03.svg" alt="icon-img"/>
                    </div>
                    <div className="content">
                        <h2><span className="count">
                                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

                                        </ScrollTrigger>
                                            {counterOn && <CountUp
                                                    start={0}
                                                    end={100}
                                                    duration={4}
                                                />
                                            }</span>+</h2>
                        <p>Skilled Experts</p>
                    </div>
                </div>
                <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                    <div className="icon">
                        <img src="assets/img/achievement-icon/04.svg" alt="icon-img"/>
                    </div>
                    <div className="content">
                        <h2><span className="count">
                                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

                                        </ScrollTrigger>
                                            {counterOn && <CountUp
                                                    start={0}
                                                    end={500}
                                                    duration={6}
                                                />
                                            }</span>+</h2>
                        <p>Media Posts</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Achivement

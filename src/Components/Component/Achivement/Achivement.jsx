import React,{useState} from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Achivement = () => {

    const [counterOn, setCounterOn] = useState(true);
  return (
    <section class="achievement-section-3 fix section-bg-2">
    <div class="shape-image">
        <img src="assets/img/achiv-shape.png" alt="shape-img"/>
    </div>
    <div class="container">
        <div class="achievement-wrapper style-2">
            <div class="section-title mb-0">
                <span class="text-white wow fadeInUp">achievement</span>
                <h2 class="text-white wow fadeInUp" data-wow-delay=".3s">
                    We Are Increasing <br/> Business Success
                </h2>
            </div>
            <div class="counter-area">
                <div class="counter-items wow fadeInUp" data-wow-delay=".3s">
                    <div class="icon">
                        <img src="assets/img/achievement-icon/01.svg" alt="icon-img"/>
                    </div>
                    <div class="content">
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
                <div class="counter-items wow fadeInUp" data-wow-delay=".5s">
                    <div class="icon">
                        <img src="assets/img/achievement-icon/02.svg" alt="icon-img"/>
                    </div>
                    <div class="content">
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
                <div class="counter-items wow fadeInUp" data-wow-delay=".7s">
                    <div class="icon">
                        <img src="assets/img/achievement-icon/03.svg" alt="icon-img"/>
                    </div>
                    <div class="content">
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
                <div class="counter-items wow fadeInUp" data-wow-delay=".9s">
                    <div class="icon">
                        <img src="assets/img/achievement-icon/04.svg" alt="icon-img"/>
                    </div>
                    <div class="content">
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

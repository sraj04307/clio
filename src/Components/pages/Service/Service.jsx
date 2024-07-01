import React,{useState, useEffect} from 'react'
import Banner2 from '../../Component/Banner/Banner2/Banner2'
import Card2 from '../../Card/Card2/Card2'
import './Service.css'
import Footer from '../../Component/Footer/Footer'

const Service = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) { 
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
        <>
            <Banner2 message={"Services"} />
            <section className="service-section fix section-padding">
                <div className="container">
                    <div className="section-title text-center">
                        <span className={isScrolled ? "wow fadeInUp ourservice active" : 'wow fadeInUp ourservice'}>OUR SERVICES</span>
                        <h2 className={isScrolled ? "wow fadeInUp ourservice2 active" : 'wow fadeInUp ourservice'}>
                            We Provide the Best Quality
                        </h2>
                    </div>
                    <div className="service-wrapper mb-0">
                        <div className="row mb-5 pb-5">
                    
                            <Card2 title={"Website Designing"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id1"}/>

                            <Card2 title={"Logo Designing"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id2"}/>

                            <Card2 title={"Product Designing"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id3"}/>

                            <Card2 title={"Social Media Creative Designing"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id4"}/>

                            <Card2 title={"Static Website Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."}id={"id5"} />

                            <Card2 title={"CMS Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id6"}/>

                            <Card2 title={"Wordpress Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id7"}/>

                            <Card2 title={"PHP Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id8"}/>

                            <Card2 title={"CodeIgnitor Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id9"}/>

                            <Card2 title={"CakePHP Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id10"}/>

                            <Card2 title={"Laravel Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id11"} />

                            <Card2 title={"Angular Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id12"}/>

                            <Card2 title={"Wix Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id13"}/>

                            <Card2 title={"WooCommerce Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id14"}/>

                            <Card2 title={"Magento Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id15"}/>

                            <Card2 title={"Shopify Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id16"}/>

                            <Card2 title={"OpenCart Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id17"}/>

                            <Card2 title={"Custom Ecommerce Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id18"}/>
                        
                            <Card2 title={"Search Engine Optimization"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id19"}/>

                            <Card2 title={"Social Media Optimization"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id20"}/>

                            <Card2 title={"Social Media Marketing"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id21"}/>

                            <Card2 title={"Google Ad Campagin"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id22"}/>
                       
                            <Card2 title={"Android App Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id23"}/>

                            <Card2 title={"IOS App Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id24"}/>

                            <Card2 title={"Hybrid App Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id25"}/>

                            <Card2 title={"Native App Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id26"}/>
                        
                            <Card2 title={"GPS Tracking Solution"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id27"}/>

                            <Card2 title={"Web Accesseblity"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id28"}/>

                            <Card2 title={"IOT Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id29"}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section style-2 fix section-padding">
                <div className="right-shape">
                    <img src="assets/img/faq/right-shape.png" alt="shape-img" />
                </div>
                <div className="faq-shape-box">
                    <div className="faq-shape">
                        <img src="assets/img/faq/shape.png" alt="shape-img" />
                    </div>
                </div>
                <div className="container">
                    <div className="faq-wrapper">
                        <div className="row g-4">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="faq-image">
                                    <img src="assets/img/faq/faq.png" alt="faq-img" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq-content">
                                    <div className="section-title">
                                        <span className="wow fadeInUp">See Our Faqs</span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            Keep Your Business Safe & <br /> Ensure High Availability
                                        </h2>
                                    </div>
                                    <div className="faq-accordion mt-4 mt-md-0">
                                        <div className="accordion" id="accordion">
                                            <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
                                                <h5 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                        How long should a business plan be?
                                                    </button>
                                                </h5>
                                                <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                        There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                                                <h5 className="accordion-header">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                                                        What is included in your services?
                                                    </button>
                                                </h5>
                                                <div id="faq2" className="accordion-collapse show" data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                        There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                                                <h5 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                                        What type of company is measured?
                                                    </button>
                                                </h5>
                                                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                        There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section fix section-padding">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="arrow-shape">
                            <img src="assets/img/arrow-shape.png" alt="shape-img" />
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-image wow fadeInUp" data-wow-delay=".4s">
                                    <img src="assets/img/contact.png" alt="contact-img" />
                                    <div className="cricle-shape">
                                        <img src="assets/img/circle-shape.png" alt="shape-img" />
                                    </div>
                                    <div className="small-cricle-shape">
                                        <img src="assets/img/choose/circle.png" alt="shape-img" />
                                    </div>
                                    <div className="frame-shape">
                                        <img src="assets/img/frame.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-content">
                                    <div className="section-title">
                                        <span className="text-white wow fadeInUp">TALK TO US</span>
                                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">How May We Help You!</h2>
                                    </div>
                                    <form action="#" id="contact-form" method="POST" className="contact-form-items">
                                        <div className="row g-4">
                                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                                <div className="form-clt">
                                                    <span>Your name*</span>
                                                    <input type="text" name="name" id="name" placeholder="Robot fox" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                                <div className="form-clt">
                                                    <span>Your Email*</span>
                                                    <input type="text" name="email" id="email" placeholder="info@example.com" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                                                <div className="form-clt">
                                                    <span>Message*</span>
                                                    <textarea name="message" id="message" placeholder="Write Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
                                                <button type="submit" className="theme-btn bg-white">
                                                    Sand Message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default Service

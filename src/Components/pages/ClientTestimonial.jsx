import React from 'react'
import Banner2 from '../Component/Banner/Banner2/Banner2'
import Footer from '../Component/Footer/Footer'
import Testi2 from '../Component/Testimonial/Test2/Testi2'

const ClientTestimonial = () => {
  return (
    <>
        <Banner2 message={"Client Testimonial"}/>
        <section>
          <div className="container">
            <div className="row py-5">
              <Testi2 id={"id1"}/>
              <Testi2 id={"id2"}/>
              <Testi2 id={"id3"}/>
              <Testi2 id={"id4"}/>
              <Testi2 id={"id5"}/>
              <Testi2 id={"id6"}/>
              <Testi2 id={"id7"}/>
              <Testi2 id={"id8"}/>
              
            </div>
          </div>
        </section>
        <Footer/>
      
    </>
  )
}

export default ClientTestimonial

import React from 'react'
import Banner2 from '../Component/Banner/Banner2/Banner2'
import About2 from '../Component/About/About2/About2'
import Service2 from '../Component/Service/Service2/Service2'
import Teams from '../Component/Teams/Teams'
import Brand from '../Component/Brand/Brand'
import Footer from '../Component/Footer/Footer'

const About = () => {
  return (
    <>
      <Banner2 message={"About Us"}/>
      <About2/>
      <Service2/>
      <Teams/>
      <Brand/>
      <Footer scrollpos={1700}/>
    </>
  )
}

export default About

import React from 'react'
import Banner from '../Component/Banner/Banner1/Banner1'
import About from '../Component/About/About1/About1'
import Service from '../Component/Service/Service1/Service1'
import Teams from '../Component/Teams/Teams'
import Testi from '../Component/Testimonial/Testi'
import Hiw from '../Component/Others/Hiw'
import Contact from '../Component/Brand/Brand'
import World from '../Component/Maps/worldmap/World'
import Achivement from '../Component/Achivement/Achivement'

const Home = () => {
  return (
    <>
      <Banner/>
      <About/>
      <Service/>
      <Achivement/>
      <Hiw/>
      <Teams/>
      <Testi/>
      <World/>
      <Contact/>
    </>
  )
}

export default Home

import React from 'react'
import Banner2 from '../Component/Banner/Banner2/Banner2'
import Footer from '../Component/Footer/Footer'
import Card5 from '../Card/Card5/Card5'

const Portfolio = () => {
  return (
    <>
      <Banner2 message={"Portfolio"} />
      <div className="container">
        <div className="row">
          <Card5/>
          <Card5/>
          <Card5/>
          <Card5/>
          <Card5/>
          <Card5/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Portfolio

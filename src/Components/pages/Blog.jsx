import React from 'react'
import Card1 from '../Card/Card1/Card1'
import { Link } from 'react-router-dom'
import Banner2 from '../Component/Banner/Banner2/Banner2'
import Footer from '../Component/Footer/Footer'


const Blog = () => {
  return (
    <>
    <Banner2 message={"Blog Grid"}/>
    <section className="news-section-4 fix section-padding">
        <div className="container">
            <div className="row g-4">
               <Card1 id={"id1"}/>
               <Card1 id={"id2"}/>
               <Card1 id={"id3"}/>
               <Card1 id={"id4"}/>
               <Card1 id={"id5"}/>
               <Card1 id={"id6"}/>
               <Card1 id={"id7"}/>
               <Card1 id={"id8"}/>
               
            </div>
            <div className="page-nav-wrap pt-5 text-center wow fadeInUp" data-wow-delay=".3s">
                <ul>
                    <li><Link className="page-numbers" to="#">01</Link></li>
                    <li><Link className="page-numbers" to="#">02</Link></li>
                    <li><Link className="page-numbers" to="#">03</Link></li>
                    <li><Link className="page-numbers" to="#"><i className="fa-solid fa-arrow-right-long"></i></Link></li>
                </ul>
            </div>
        </div>
        </section>

        <Footer/>
    </>
    
  )
}

export default Blog

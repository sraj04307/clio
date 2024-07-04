import React,{useEffect} from 'react'
import Banner from '../../Components/Component/Banner/Banner2/Banner2'
import Footer from '../../Components/Component/Footer/Footer'
import Card4 from '../Card/Card4/Card4'


const Industries = () => {

  useEffect(() => {
    document.title = "Industries"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Industries");

  }, []);

  return (
    <>
      <Banner message={"Industries"}/>
      <div className="container">
        <div className="row my-5">
        <Card4/>
        <Card4/>
        <Card4/>
        <Card4/>
        <Card4/>
        <Card4/>
        <Card4/>
        <Card4/>
        <Card4/>
        </div>
      </div>
      
      <Footer/>

    </>
  )
}

export default Industries

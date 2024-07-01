import React from 'react'
import Banner2 from '../Component/Banner/Banner2/Banner2'
import Forms from '../Component/Forms/Forms'
import FormMaps from '../Component/Maps/FormMaps.jsx'
import Footer from '../Component/Footer/Footer.jsx'

const Contact = () => {
  return (
    <>
        <Banner2 message={"Contact Us"}/>
        <Forms/>
        <FormMaps/>
        <Footer/>
    </>
  )
}

export default Contact

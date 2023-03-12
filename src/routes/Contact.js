import React from 'react'
import NavBar from '../Components/NavBar/NarBar'
import Hero from './heroComponent/Hero'
import ContactImg from "../Components/assets/2.jpg"
import Footer from '../Components/Footer/Footer'
import ContactForm from '../Components/ContactForm'

const Contact = () => {
  return (
    <div>
      <NavBar/>
      <Hero  cName="hero-mid" location={ContactImg} heading='Contact Us' heroLinkText="" paraText="" btnClsname="hide" url="/"/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact
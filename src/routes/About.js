import React from 'react'
import NavBar from '../Components/NavBar/NarBar'
import Hero from './heroComponent/Hero'
import AboutImg from "../Components/assets/night.jpg"
import Footer from '../Components/Footer/Footer'
import AboutCnt from '../Components/AboutCnt'

const About = () => {
  return (
    <div>
      <NavBar/>
      <Hero  cName="hero-mid" location={AboutImg} heading='About' heroLinkText="" paraText="" btnClsname="hide" url="/"/>
      <AboutCnt/>
      <Footer/>
    </div>
  )
}

export default About
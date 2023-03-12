import React from 'react'
import NavBar from '../Components/NavBar/NarBar'
import Hero from './heroComponent/Hero'
import ServiceImg from "../Components/assets/3.jpg"
import Footer from '../Components/Footer/Footer'
import RecentTrip from '../Components/RecentTrips/RecentTrip'

const Service = () => {
  return (
    <div>
      <NavBar/>
      <Hero  cName="hero-mid" location={ServiceImg} heading='Service' heroLinkText="" paraText="" btnClsname="hide" url="/"/>
      <RecentTrip/>
      <Footer/>
    </div>  
  )
}

export default Service
import React from 'react'
import NarBar from '../Components/NavBar/NarBar'
import Hero from './heroComponent/Hero'
import HomeImg from '../Components/assets/12.jpg'
import Destination from '../Components/Destination/Destination'
import RecentTrip from '../Components/RecentTrips/RecentTrip'
import Footer from '../Components/Footer/Footer'


const Home = () => {
  return (
    <div>
        <NarBar/>
        <Hero  cName="hero" location={HomeImg} heading='Your Journey Your Story' heroLinkText="Travel Plan" paraText="Choose Your Destination" btnClsname="show" url="/"/>
        <Destination/>
        <RecentTrip/>
        <Footer/>
    </div>
  )
}

export default Home
import React from 'react'
import ImageOne from '../assets/1.jpg'
import ImageTwo from '../assets/2.jpg'
import ImageThree from '../assets/3.jpg'
import ImageFour from '../assets/4.jpg'
import BodyHeading from '../BodyHeading'
import "./Destination.css"
import DestinationMenu from './DestinationMenu'

const  Destination = () => {
  return (
    <div className='destination'>
        <BodyHeading Title='Popular Destinations' Text='Tours
         give you the opportunity to see a lot within the time frame.'/>
        <DestinationMenu cName='first-des' heading="Taal Volcano, Batangas" text="One of the most iconic view in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. if you fancy a closer look, the hike up to the crater is mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano including volcanic rocks and steam vents. The hike can ve dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home" img1={ImageOne} img2={ImageTwo}/>
        <DestinationMenu cName='first-des second' heading="Mt. Daguldul, Batangas" text="If you're looking for a hike that's a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You'll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There's a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you've made it back down, head straight to the beach for a refreshing well-deserved swim." img1={ImageThree} img2={ImageFour}/>
    </div>
  )
}

export default Destination
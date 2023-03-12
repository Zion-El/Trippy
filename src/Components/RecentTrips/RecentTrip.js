import React from 'react'
import BodyHeading from '../BodyHeading'
import "../Destination/Destination.css"
import "./trip.css"
import TripData from './tripData'
import {Trips} from './tripMenu'
import "../Destination/Destination.css"

const RecentTrip = () => {
  return (
    <div className='destination'>
        <BodyHeading Title="Recent Trips" Text="You can discover unique destinations using Google Maps"/>
        <div className='tripcard'>
            {Trips.map((Trip, index)=> <TripData key={index} image={Trip.img} heading={Trip.title} text={Trip.text}/>)}
        </div>
        
    </div>
  )
}

export default RecentTrip
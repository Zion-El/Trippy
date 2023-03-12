import React from 'react'
import "./Destination/Destination.css"

const BodyHeading = ({Title, Text}) => {
  return (
    <div className='heading'>
        <h1>{Title}</h1>
        <p>{Text}</p>
    </div>
  )
}

export default BodyHeading
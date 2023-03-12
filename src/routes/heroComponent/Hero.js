import React from 'react'
import './hero.css'

const Hero = (prop) => {
  return (
    <div className={prop.cName}>
        <img alt='hero' src={prop.location}></img>
        <div className='hero-text'>
            <h1>{prop.heading}</h1>
            <p>{prop.paraText}</p>
            <a  className={prop.btnClsname} href={prop.url}>{prop.heroLinkText}</a>
        </div>
    </div>
  )
}

export default Hero
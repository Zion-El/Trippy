import React, { useState } from 'react'
import {MdDehaze} from 'react-icons/md'
import {IoMdClose} from 'react-icons/io'
import  './NarBar.css'
import { MenuItems } from './NavMenu'
import { Link } from 'react-router-dom'


const NarBar = () => {
    const[icon, setIcon] = useState(MdDehaze)
    const [clicked, setClicked] = useState(true)
    const handleClick = () => {
        setClicked(prevState=>!prevState)
        if (!clicked){
            setIcon(MdDehaze)
        }
        if (clicked){
            setIcon(IoMdClose)
        }
    }

  return (
    <div className='NavBar'>
        <h1 className='navBar-Logo'>Trippy</h1>
        <div className='menu-icon'>
            <button className='hamburger'  onClick={handleClick}>{icon}</button>
        </div>
        <ul className={clicked ? 'navMenu-Box' : 'navMenu-Box active'}>
            {MenuItems.map((item, index)=>
            <li key={index}>
                <Link className={item.cName} to={item.url}>{item.title}</Link>
            </li>)}
        </ul>
        <button><Link className='websize' to="/signin">Sign In</Link></button>
    </div>
  )
}

export default NarBar
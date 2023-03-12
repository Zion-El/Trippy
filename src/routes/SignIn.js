import React from 'react'
import Footer from '../Components/Footer/Footer'
import NarBar from '../Components/NavBar/NarBar'
import SignInForm from '../Components/SignInForm'

const SignIn = () => {
  return (
    <div>
        <NarBar/>
        <SignInForm/>
        <Footer/>
    </div>
  )
}

export default SignIn
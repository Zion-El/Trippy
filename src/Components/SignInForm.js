import React from 'react'
import { Link } from 'react-router-dom'
import "./SignIn.css"

const SignInForm = () => {
  return (
    <div className='signin-form'>
        <h2>Sign In Here !</h2>
        <form>
            <input type='email' placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            
            <button className='signin_Btn'>Sign in</button>
            <div className='signup-tab'>
              <p>Don't have an account?<Link className='signup-link' to='/signup'>Sign Up Here</Link></p>
              <Link className='F-Password' to='/forgotpassword'>Forget Password</Link>
            </div>
        </form>
        
    </div>
  )
}

export default SignInForm
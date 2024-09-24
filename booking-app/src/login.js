import React from 'react';
import {FaLock} from 'react-icons/fa';
import {FaUser, FaEye, FaEyeSlash, FaFacebook, FaGoogle, FaLinkedin} from 'react-icons/fa';
import './index.css'
import { useState } from 'react';



function Login(){
    // set useState
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const PasswordToggle = () =>{
        setIsPasswordVisible(!isPasswordVisible);
    }
    return(
      <div className="sign-in-container">
        {/* login form */}
            <form action="#">
            <h1>Login</h1>
                <div className='sign-in-social-icons'>
                    <div className='social-icon'><FaFacebook/></div>
                    <div className='social-icon'><FaGoogle/></div>
                    <div className='social-icon'><FaLinkedin/></div>
                </div> 
            <div className="input-box-sign-in">
                <FaUser className='icon'/>
                <input type="text" placeholder="Email" required/>
            </div>
            <div className='input-box-sign-in'>
                <FaLock className='icon'/>
                {/* Toggle between FaEye and FaEyeSlash */}
                <span className='icon-button' onClick={PasswordToggle}>{isPasswordVisible ? < FaEyeSlash/>:<FaEye/>}</span>
                  {/* Show or hide password based on state */}
                <input placeholder="Password" type={isPasswordVisible ? 'text' : 'password'} required/>
                
            </div>
            <div className='remember-forget'>
                <label><input type='checkbox'/>Remember me</label>
                <a href=''>Forget Password</a>
            </div>
            <div className='submit-button'>
                <input type='submit' value='Submit'/>
            </div>
            <div className='signup-link'>
                <p>Don't have an account? <a href='#'>Register</a></p>
            </div>
            </form>
      </div>     
    )
    
}
export default Login;
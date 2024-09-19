import {FaLock} from 'react-icons/fa';
import {FaUser} from 'react-icons/fa';
import {FaEye} from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import './index.css'
function Login(){
    return(
      <div className="container">
        <form action="#">
        <h1>Login</h1>
        <div className="input-box">
       <FaUser className='icon'/>
        <input type="text" placeholder="Email" required/>
        </div>
        <div className='input-box'>
       <FaLock className='icon'/>
        <input type="password" placeholder="Password" required/>
        {/* <FaEye className='icon'/>
        <FaEyeSlash className='icon'/> */}
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
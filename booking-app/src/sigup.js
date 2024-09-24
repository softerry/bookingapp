import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import './index.css';


function SignupForm (){
    return(
        <div className='sign-up-container'>
            <form action='#'>
            <div className='sign-up-social-icons'>
                    <div className='social-icon'><FaFacebook/></div>
                    <div className='social-icon'><FaGoogle/></div>
                    <div className='social-icon'><FaLinkedin/></div>
            </div> 
                <div className='input-box-sign-up'>
                    <input type='text' placeholder='Full Name'/>
                </div>
                <div className='input-box-sign-up'>
                    <input type='text' placeholder='Email'/>
                </div>
        
                <div className="input-box-sign-up">
                    <input type='password' placeholder='Enter Password' required/>
                </div>
                <div className="input-box-sign-up">
                    <input type='password' placeholder='Repeat Password' required/>
                </div>
                <div class='input-box-sign-up'>
                   <input type='checkbox'/>
                </div>

                <div className="input-box-sign-up">
                    <input type="submit" value="Sign Up"/>
                    <input type="button" value="Cancel"/>
                </div>

            </form>
        </div>
    );
  
};


export default SignupForm;
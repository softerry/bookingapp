import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import './index.css';
import { useState } from "react";


function SignupForm (){
    const [password, setPassword] = useState ('');
    const [isvalid, setIsvalid] = useState (null);
    
    // creat Regex for password validation
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const checkPassword  = (e) => {
        const value = e.target.value;
        setPassword(value);
        // check if password matches the regex
        setIsvalid(passwordReg.test(value));
    }

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
                    <input type='password' value={password} onChange={checkPassword} placeholder='Enter Password' required/>
                    {isvalid === null ? null : isvalid ?(<p> Password is valid!</p>): ( <p>Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.</p>)}
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
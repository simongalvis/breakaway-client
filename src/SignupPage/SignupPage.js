import React from 'react';
import '../SignupPage/SignupPage.css';
import NavBar from '../NavBar/NavBar.js';
import { Link } from 'react-router-dom';



class SignupPage extends React.Component{
    render(){
        return(
            <div class='SignupPage'>
                <NavBar/>
                <div className='signupFormContainer'>
                <h2 id='signupheading'>Become part of the Breakaway crew</h2>
                <form>
                    <input  type='text' id='signupusername' name='signupusername' placeholder='Username'/>
                    <input  type='text' id='signuppassword' name='signuppassword' placeholder='Password'/>
                    <Link to='/activities'>
                        <button id='signupbutton'>Sign Up</button>
                    </Link>
                    
                </form>
                </div>
                
            </div>
            
        )
    }
}

export default SignupPage;
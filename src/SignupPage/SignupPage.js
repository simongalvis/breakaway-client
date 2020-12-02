import React from 'react';
import '../SignupPage/SignupPage.css';
import NavBar from '../NavBar/NavBar.js';



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
                    <button id='signupbutton'>Sign Up</button>
                </form>
                </div>
                
            </div>
            
        )
    }
}

export default SignupPage;
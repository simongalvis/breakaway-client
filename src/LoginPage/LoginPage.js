import React from 'react';
import '../LoginPage/LoginPage.css';
import NavBar from '../NavBar/NavBar.js';




class LoginPage extends React.Component{
    render(){
        return(
            <div className='LoginPage'>
                <NavBar />
                <h2 id='loginheading'>Log In</h2>
                <form>
                    <input  type='text' id='loginusername' name='loginusername' placeholder='Username'/>
                    <input  type='text' id='loginpassword' name='loginpassword' placeholder='Password'/>
                    <button id='loginbutton'>Log In</button>
                </form>
                
            </div>
            
        )
    }
}

export default LoginPage;





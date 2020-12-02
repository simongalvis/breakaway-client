import React from 'react';
import { Link } from 'react-router-dom'
import '../LoginPage/LoginPage.css';
import NavBar from '../NavBar/NavBar.js';
import Footer from '../Footer/Footer'



class LoginPage extends React.Component{
    render(){
        return(
            <div className='LoginPage'>
                <NavBar />
                <h2 id='loginheading'>Log In</h2>
                <form>
                    <input  type='text' id='loginusername' name='loginusername' placeholder='Username'/>
                    <input  type='text' id='loginpassword' name='loginpassword' placeholder='Password'/>
                    <Link to='/activities'>
                        <button id='loginbutton'>Log In</button>
                    </Link>
                    
                </form>
                
                
            </div>
            
        )
    }
}

export default LoginPage;





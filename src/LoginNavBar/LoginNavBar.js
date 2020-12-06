import React from 'react';
import { Link } from 'react-router-dom';
import './LoginNavBar.css';
import logo from '../images/breakaway-logo.png'



class LoginNavBar extends React.Component{



    render(){
        return(
            <header>
                <Link to='/'>
                    <img src={logo} alt='Blue breakaway logo' id='main-logo'/>
                </Link>
                <Link to="/signup-page">
                    <button className='nav-button' id='signup-button' value='signup'>Sign Up</button>
                </Link>
                
                
            </header>
            
        )
    }
}


export default LoginNavBar;
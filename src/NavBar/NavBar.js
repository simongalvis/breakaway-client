import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../images/breakaway-logo.png'



class NavBar extends React.Component{



    render(){
        return(
            <header>
                <Link to='/'>
                    <img src={logo} alt='Blue breakaway logo' id='main-logo'/>
                </Link>
                <a href="/login-page">
                    <button className='nav-button' id='login-button' value='login'>Log In</button>
                </a>
                
                
            </header>
            
        )
    }
}


export default NavBar;
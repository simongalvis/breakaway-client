import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import car from '../images/breakaway-logo.png'



class NavBar extends React.Component{



    render(){
        return(
            <header>
                <Link to='/'>
                    <img src={car} alt='Orange breakaway logo' id='main-logo'/>
                </Link>
                <Link to="/login-page">
                    <button class='nav-button' id='login-button' value='login'>Log In</button>
                </Link>
                
                
            </header>
            
        )
    }
}


export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardNavBar.css';
import logo from '../images/breakaway-logo.png'



class DashboardNavBar extends React.Component{



    render(){
        return(
            <header>
                <Link to='/'>
                    <img src={logo} alt='Blue breakaway logo' id='main-logo'/>
                </Link>
                <Link to="/new-activity">
                    <button class='nav-button' id='newactivity-breakaway-button' value='new activity'><b> +Breakaway!</b>  </button>
                </Link>
                
                
            </header>
            
        )
    }
}


export default DashboardNavBar;
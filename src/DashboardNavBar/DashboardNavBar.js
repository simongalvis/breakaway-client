import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import './DashboardNavBar.css';
import logo from '../images/breakaway-logo.png'
import ApiContext from '../ApiContext';



class DashboardNavBar extends React.Component{
static contextType = ApiContext;


    render(){
        return(
            <header>
                <BrowserRouter>
                <NavLink to={Object.keys(this.context.loggedUser).length > 0 ? '/activities' : '/'}>
                    <img src={logo} alt='Blue breakaway logo' id='main-logo'/>
                </NavLink>
                <NavLink to="/new-activity">
                    <button className='nav-button' id='newactivity-breakaway-button' value='new activity'><b> +Breakaway!</b>  </button>
                </NavLink>
                </BrowserRouter>
                
                
            </header>
            
        )
    }
}


export default DashboardNavBar;
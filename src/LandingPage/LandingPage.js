import React from 'react';
import {Link, BrowserRouter } from 'react-router-dom';
import './LandingPage.css';
import sampleHero from '../images/sample-hero.jpg'

class LandingPage extends React.Component{


    render(){
        return(
            
            <div className='LandingPage'>
                
                <h2 className='hero'>The simple way to track your athletic progress</h2>
                <p id='hero-text'>Breakaway allows you to log your runs, walks, hikes, and other activities in one convenient location</p>
                <img src={sampleHero} id="landingpage-ui-image" alt="Breakaway ui on mobile"/>
                <Link to='/signup-page'>
                    <button id='landingpage-signup-button'><b>Sign Up</b></button>
                </Link>
                
            </div>
            
        )
    }
}

export default LandingPage;
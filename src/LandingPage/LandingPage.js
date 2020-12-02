import React from 'react';
import {Route, Link } from 'react-router-dom';
import './LandingPage.css';
import NavBar from '../NavBar/NavBar';
import sampleHero from '../images/sample-hero.jpg'

class LandingPage extends React.Component{


    render(){
        return(
            
            <div className='LandingPage'>
                
                <h2 className='hero'>The #1 way to track your athletic progress</h2>
                <img src={sampleHero} id="landingpage-ui-image" alt="Breakaway ui on mobile"/>
                <Link to='/signup-page'>
                    <button id='landingpage-signup-button'>Sign up</button>
                </Link>
                

            </div>
            
        )
    }
}

export default LandingPage;
import React from 'react';
import {Route, Link } from 'react-router-dom';
//import config from '../config';
import './App.css';
import NavBar from '../NavBar/NavBar'
import LandingPage from '../LandingPage/LandingPage'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'




class App extends React.Component {



  renderNavRoutes(){
    return(
      <>
    <Route exact path='/' component={NavBar}/>
    </>
    )
  }

  renderMainRoutes(){
    return(
      <>
    <Route exact path='/' component={LandingPage}/>
    <Route exact path='/signup-page' component={SignupPage}/>
    <Route exact path='/login-page' component={LoginPage}/>
</>
    
    )
  }

  render(){
  return (
    <div className="App">
      <nav>
        {this.renderNavRoutes()}
      </nav>

      <main>
        {this.renderMainRoutes()}
      </main>
      
    </div>
  );
  }
}

export default App;

import React from "react";
import { Route, Link } from "react-router-dom";
//import config from '../config';
import "./App.css";
import NavBar from "../NavBar/NavBar";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import Footer from "../Footer/Footer";
import ExpandedActivity from "../ExpandedActivity/ExpandedActivity";
import Dashboard from "../Dashboard/Dashboard";
import AddActivity from "../AddActivity/AddActivity";
import ApiContext from "../ApiContext";
import config from "../config";
require("dotenv").config();

class App extends React.Component {
  state = {
    activities: [
      {
      "name":"Trent Richardson",
      "title": "Morning run" , 
      "duration": "27" ,
      "distance": "3",
      "description": "Felt good"

  },
  {
      "name":"John Jenkins",
      "title": "Evening run" , 
      "duration": "30" ,
      "distance": "4",
      "description": "Felt tired last 2 miles"

  },
  {
      "name":"Trent Richardson",
      "title": "Lunch run", 
      "duration": "21",
      "distance": "2.7",
      "description": "Really hot outside, would have liked to run some more"

  } 
    ],

  users: [
    {"id":1,"fullname":"Trent Richardson","username":"jappl018","password":"appleseedsrgreat","date_created":"2020-12-05T07:36:37.093Z"},
  {"id":2,"fullname":"John Jenkins","username":"jjenk018","password":"oldmanjenkins","date_created":"2020-12-05T07:37:02.390Z"},
  {"id":3,"fullname":"Sara Jacobs","username":"sjaco902","password":"ilike2run","date_created":"2020-12-05T07:37:30.174Z"}
],
loggedUser: {}};

  /* componentDidMount() {
    fetch(`https://limitless-earth-13782.herokuapp.com/api/activities`, {
      mode:"no-cors"
    })
    .then(res => console.log(res.json()))
    .catch(error => alert('Error'))
      
    //console.log('api endpoint: ' + config.API_ENDPOINT)
  }
 */

 handleAddActivity = (activity) =>{
   this.setState({
      activities: [...this.state.activities, activity]
})
 }
 handleSetLoggedUser = (user) =>{
    this.setState({
      loggedUser: user
    })
 }
  renderNavRoutes() {
    return (
      <>
        <Route exact path="/" component={NavBar} />
      </>
    );
  }

  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup-page" component={SignupPage} />
        <Route exact path="/login-page" component={LoginPage} />
        <Route exact path="/activities" component={Dashboard} />
        <Route exact path="/new-activity" component={AddActivity} />
        <Route
          exact
          path="/activities/:activityId"
          component={ExpandedActivity}
        />
      </>
    );
  }

  render() {
    const value = {
      activities: this.state.activities,
      users: this.state.users,
      loggedUser: this.state.loggedUser,
      addActivity: this.handleAddActivity,
      setLoggedUser: this.handleSetLoggedUser
    };
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <nav>{this.renderNavRoutes()}</nav>

          <main>{this.renderMainRoutes()}</main>
          <Footer />
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;

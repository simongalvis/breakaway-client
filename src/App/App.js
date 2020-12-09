import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
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
    activities: [],
    users: [],
    loggedUser: {},
  };

  componentDidMount() {

    Promise.all([
      fetch(`${config.API_ENDPOINT}/users`),
      fetch(`${config.API_ENDPOINT}/activities`),
    ])
      .then(([usersRes, activitiesRes]) => {
        if (!usersRes.ok) return usersRes.json().then((e) => Promise.reject(e));
        if (!activitiesRes.ok)
          return activitiesRes.json().then((e) => Promise.reject(e));

        return Promise.all([usersRes.json(), activitiesRes.json()]);
      })
      .then(([users, activities]) => {
        this.setState({ users, activities });
      })
      .catch((error) => {
        console.error({ error });
      });

    
  }



  handleDatabaseRefresh = () =>{
    Promise.all([
      fetch(`${config.API_ENDPOINT}/users`),
      fetch(`${config.API_ENDPOINT}/activities`),
    ])
      .then(([usersRes, activitiesRes]) => {
        if (!usersRes.ok) return usersRes.json().then((e) => Promise.reject(e));
        if (!activitiesRes.ok)
          return activitiesRes.json().then((e) => Promise.reject(e));

        return Promise.all([usersRes.json(), activitiesRes.json()]);
      })
      .then(([users, activities]) => {
        this.setState({ users, activities });
      })
      .catch((error) => {
        console.error({ error });
      });
  }



  handleAddActivity = (activity) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(activity),
    };

    fetch(`${config.API_ENDPOINT}/activities`, requestOptions)
      .then((res) => res.json())
      .then((resJson) =>
        this.setState({
          activities: [...this.state.activities, activity],
        })
      );
  };
  handleCreateUser = (user) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    fetch(`${config.API_ENDPOINT}/users`, requestOptions)
      .then((res) => res.json())
      .then((resJson) =>
        this.setState({
          activities: [...this.state.users, user],
        })
      );
  };

  handleLogin = (loginUsername, loginPassword) => {
     const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({username: loginUsername, password:loginPassword })
    };

     fetch(`${config.API_ENDPOINT}/users/login`, requestOptions)
      .then((res) => { if (res.statusText != 'OK') {
        
         alert('Username or password are incorrect. Please try again!')
      }
      else if (res.statusText == 'OK') {
        const found = this.state.users.find(user => (user['username'] == loginUsername) ) 
        
         //console.log(found)
         this.setState({loggedUser: found});

        
      }
    })

   
  };

  handleSetLoggedUser = (user) => {

    this.setState({
      loggedUser: user,
    }); 
    
  };
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
        
        {/* <Route
          exact
          path="/activities/:activityId"
          component={ExpandedActivity}
        /> */}
      
      </>
    );
  }

  
  render() {
    const value = {
      activities: this.state.activities,
      users: this.state.users,
      loggedUser: this.state.loggedUser,
      addActivity: this.handleAddActivity,
      setLoggedUser: this.handleSetLoggedUser,
      createUser: this.handleCreateUser,
      refreshDatabase: this.handleDatabaseRefresh,
      loginUser: this.handleLogin
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

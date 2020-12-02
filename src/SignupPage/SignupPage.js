import React from 'react';
import '../SignupPage/SignupPage.css';
import NavBar from '../NavBar/NavBar.js';



class SignupPage extends React.Component{
    render(){
        return(
            <div class='SignupPage'>
                <NavBar/>
                <h2>Content from Signup page</h2>
            </div>
            
        )
    }
}

export default SignupPage;
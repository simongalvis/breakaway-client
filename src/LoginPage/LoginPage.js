import React from 'react';
import '../LoginPage/LoginPage.css';
import NavBar from '../NavBar/NavBar.js';




class LoginPage extends React.Component{
    render(){
        return(
            <div className='LoginPage'>
                <NavBar/>
                <h2>Content from login page</h2>
            </div>
            
        )
    }
}

export default LoginPage;





import React from 'react';
import '../SignupPage/SignupPage.css';
import NavBar from '../NavBar/NavBar.js';
import ApiContext from '../ApiContext';




 


class SignupPage extends React.Component{
static contextType = ApiContext;

    handleSubmit = e =>{
        e.preventDefault();

       const  { signupFullname, signupUsername, signupPassword } = e.target;

       


       const user = {
           fullname: signupFullname.value,
           username: signupUsername.value,
           password: signupPassword.value
       }
       this.context.createUser(user)
       this.context.refreshDatabase()
       alert('Account successfully created. Now Click the login button on the top right of the page to login and get started!')

       
    }

     
    
    
    render(){
        return(
            <div className='SignupPage'>
                <NavBar/>
                <div className='signupFormContainer'>
                <h2 id='signupheading'>Become part of the Breakaway crew</h2>
                <form onSubmit={this.handleSubmit}> 
                    <label htmlFor='signupFullname'><b>Full name:</b></label>
                    <input  type='text' id='signupFullname' name='signupFullname' placeholder='Full name' autoCorrect="off" autoCapitalize="none" required/>
                    <label htmlFor='signupUsername'><b>Username:</b></label>
                    <input  type='text' id='signupUsername' name='signupUsername' placeholder='Username' autoCorrect="off" autoCapitalize="none" required/>
                    <label htmlFor='signupPassword'><b>Password:</b></label>
                    <input  type='text' id='signupPassword' name='signupPassword' placeholder='Password' autoCorrect="off" autoCapitalize="none" required/>
                    <button id='signupbutton'><b>Sign Up</b></button>
                    
                    
                </form>
                </div>
                
            </div>
            
        )
    }
}

export default SignupPage;
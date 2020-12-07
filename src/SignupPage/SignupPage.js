import React from 'react';
import '../SignupPage/SignupPage.css';
import NavBar from '../NavBar/NavBar.js';
import ApiContext from '../ApiContext';



 


class SignupPage extends React.Component{
static contextType = ApiContext;

    handleSubmit = e =>{
        e.preventDefault();

       const  { signupFullname, signupUsername, signupPassword } = e.target;

       //console.log(` signupFullname: ` +signupFullname.value +  `signupUsername: ` + signupUsername.value + `signupPassword: ` + signupPassword.value)


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
                    <input  type='text' id='signupFullname' name='signupFullname' placeholder='Full name' required/>
                    <input  type='text' id='signupUsername' name='signupUsername' placeholder='Username' required/>
                    <input  type='text' id='signupPassword' name='signupPassword' placeholder='Password' required/>
                    <button id='signupbutton'>Sign Up</button>
                    
                    
                </form>
                </div>
                
            </div>
            
        )
    }
}

export default SignupPage;
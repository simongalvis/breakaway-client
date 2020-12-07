import React from 'react';
import '../LoginPage/LoginPage.css';
import LoginNavBar from '../LoginNavBar/LoginNavBar.js';
import ApiContext from '../ApiContext';




class LoginPage extends React.Component{
static contextType = ApiContext;

handleSubmit = e =>{
    e.preventDefault();
   

const  { loginUsername, loginPassword } = e.target;
 
this.context.loginUser(loginUsername.value, loginPassword.value )
   
  
   
setTimeout( () => {if (Object.keys(this.context.loggedUser).length > 0){
           this.props.history.push('/activities')}}, 500)
   
   




}
    render(){
        return(
            <div className='LoginPage'>
                <LoginNavBar />
                <div className='loginFormContainer'>
                <h2 id='loginheading'>Log In</h2>
                <form onSubmit={this.handleSubmit}>
                    <input  type='text' id='loginUsername' name='loginUsername' placeholder='Username' required/>
                    <input  type='password' id='loginPassword' name='loginPassword' placeholder='Password' required/>
                        <button type="submit" id='loginbutton'>Log In</button>
                    
                </form>
                </div>
                 
                
                
            </div>
            
        )
    }
}

export default LoginPage;





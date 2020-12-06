import React from 'react';
import '../LoginPage/LoginPage.css';
import LoginNavBar from '../LoginNavBar/LoginNavBar.js';
import ApiContext from '../ApiContext';




class LoginPage extends React.Component{
static contextType = ApiContext;

handleSubmit = e =>{
    e.preventDefault();
    //console.log('Submit works')

   const  { loginUsername, loginPassword } = e.target;
   //console.log(loginPassword.value + ' ' + loginUsername.value) 

   const found =this.context.users.find(user => (user['username'] == loginUsername.value) && user['password'] == loginPassword.value )

   if(found == undefined){
    alert('Username or password is incorrect. Please try again')
   }
//console.log(this.context.users[0]['username'] + 'is or is not equal to ' + loginUsername.value)

//console.log(found)

this.context.setLoggedUser(found);

if(found){
    this.props.history.push('/activities')
}




}
    render(){
        return(
            <div className='LoginPage'>
                <LoginNavBar />
                <div className='loginFormContainer'>
                <h2 id='loginheading'>Log In</h2>
                <form onSubmit={this.handleSubmit}>
                    <input  type='text' id='loginUsername' name='loginUsername' placeholder='Username' required/>
                    <input  type='text' id='loginPassword' name='loginPassword' placeholder='Password' required/>
                        <button type="submit" id='loginbutton'>Log In</button>
                    
                </form>
                </div>
                 
                
                
            </div>
            
        )
    }
}

export default LoginPage;





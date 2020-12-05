import React from 'react';
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext';
import DashboardNavBar from '../DashboardNavBar/DashboardNavBar';
import './AddActivity.css'


class AddActivity extends React.Component{
static contextType = ApiContext;

    handleSubmit = e =>{
        e.preventDefault();
        console.log('handleSubmit working')
        const { titleInput, durationInput, distanceInput, descriptionInput } = e.target;
        console.log(titleInput.value)
       /*  [titleInput, durationInput, distanceInput, descriptionInput].map(input =>{
            if(!input.value.trim()){
            return alert(`You must submit a value!`)
            }
        }) */
        const activity = {
            name: this.context.loggedUser['fullname'],
            title: titleInput.value,
            duration: durationInput.value,
            distance: distanceInput.value,
            description: descriptionInput.value
        }
        this.context.addActivity(activity)

        this.props.history.push('/activities')
    }
    

    

    render(){
        return(
            <div className='AddActivity'>
                <DashboardNavBar/>
                
                <div className='loginFormContainer'>
                <h2 id='loginheading'>Add Activity</h2>
                <form onSubmit={this.handleSubmit}>
                    <input  type='text' id='titleInput' name='titleInput' placeholder='Title' />
                    <input  type='text' id='durationInput' name='durationInput' placeholder='Duration' required/>
                    <input  type='text' id='distanceInput' name='distanceInput' placeholder='Distance' required/>
                    <input  type='text' id='descriptionInput' name='descriptionInput' placeholder='Description' required/>
                    {/* <Link to='/activities'> */}
                        <button type='submit' id='activity-submit-button'>Submit</button>
                    {/* </Link> */}
                    
                </form>
                </div>
                    
                    
                    
                
                
            </div>
        
        )
    }
}

export default AddActivity;
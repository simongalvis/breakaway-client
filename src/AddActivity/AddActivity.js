import React from 'react';
import { Link } from 'react-router-dom'
import DashboardNavBar from '../DashboardNavBar/DashboardNavBar';
import './AddActivity.css'


class AddActivity extends React.Component{



    render(){
        return(
            <div className='AddActivity'>
                <DashboardNavBar/>
                
                <div className='loginFormContainer'>
                <h2 id='loginheading'>Add Activity</h2>
                <form>
                    <input  type='text' id='title-input' name='title-input' placeholder='Title' required/>
                    <input  type='text' id='duration-input' name='duration-input' placeholder='Duration' required/>
                    <input  type='text' id='distance-input' name='distance-input' placeholder='Distance' required/>
                    <input  type='text' id='description-input' name='description-input' placeholder='Description' required/>
                    {/* <Link to='/activities'> */}
                        <button type='submit' id='activity-submit-button' onClick={e => console.log('I work!')} >Submit</button>
                    {/* </Link> */}
                    
                </form>
                </div>
                    
                    
                    
                
                
            </div>
        
        )
    }
}

export default AddActivity;
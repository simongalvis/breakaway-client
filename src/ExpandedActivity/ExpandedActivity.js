import React from 'react';
import './ExpandedActivity.css';
import NavBar from '../NavBar/NavBar'

class ExpandedActivity extends React.Component{


    render(){
        return(
            <div className='ExpandedActivity'>
                <NavBar/>
                <h2>Expanded Activity</h2>
            </div>
            
        )
    }
}

export default ExpandedActivity;
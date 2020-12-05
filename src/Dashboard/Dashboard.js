import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import DashboardNavBar from '../DashboardNavBar/DashboardNavBar'
import Activity from '../Activity/Activity'
import {activityStore} from '../store'
import ApiContext from '../ApiContext'





class Dashboard extends React.Component{

    static contextType = ApiContext

    activitiesToDisplay = this.context.activities.filter(activity => activity.name == this.context.loggedUser.fullname)

    render(){
        return(
            <div className='Dashboard'>
                <DashboardNavBar/>
                <h2>Activities</h2>
                {this.activitiesToDisplay.length > 0 ?
                this.activitiesToDisplay.map(activity => (
                    <Activity name={activity.name}
                              title={activity.title}
                              duration={activity.duration} 
                              distance={activity.distance}/>
                ))
                : <h5>No activities recorded yet! To get started, add your first activity by clicking the blue "Breakaway" button on the top right.</h5>}
                    
                
            </div>
            
        )
    }
}


export default Dashboard;
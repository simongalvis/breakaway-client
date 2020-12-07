import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import DashboardNavBar from '../DashboardNavBar/DashboardNavBar'
import Activity from '../Activity/Activity'
import {activityStore} from '../store'
import ApiContext from '../ApiContext'
import activity from '../Activity/Activity'





class Dashboard extends React.Component{

    static contextType = ApiContext

    activitiesToDisplay = this.context.activities.filter(activity => activity.user_id == this.context.loggedUser.id)
    user = activity => this.context.users.find(user => activity.user_id == user.id)

    render(){
        return(
            <div className='Dashboard'>
                <DashboardNavBar/>
                <h2>Activities</h2>
                {this.activitiesToDisplay.length > 0 ?
                this.activitiesToDisplay.map(activity => (
                    <Activity key={activity.id}
                              name={this.user(activity).fullname}
                              title={activity.title}
                              duration={activity.duration} 
                              distance={activity.distance}
                              description={activity.description}
                              date={activity.date_published}/>
                ))
                : <h5>No activities recorded yet! To get started, add your first activity by clicking the blue "Breakaway" button on the top right.</h5>}
                    
                
            </div>
            
        )
    }
}


export default Dashboard;
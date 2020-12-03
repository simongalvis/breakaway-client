import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import DashboardNavBar from '../DashboardNavBar/DashboardNavBar'
import Activity from '../Activity/Activity'
import {activityStore} from '../store'



class Dashboard extends React.Component{


    render(){
        return(
            <div className='Dashboard'>
                <DashboardNavBar/>
                <h2>Activities</h2>

                {activityStore.map(activity => (
                    <Activity name={activity.name}
                              title={activity.title}
                              duration={activity.duration} 
                              distance={activity.distance}/>
                ))}
                    
                
            </div>
            
        )
    }
}


export default Dashboard;
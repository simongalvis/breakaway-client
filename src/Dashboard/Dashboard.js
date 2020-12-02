import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import NavBar from '../NavBar/NavBar'
class Dashboard extends React.Component{

    render(){
        return(
            <div className='Dashboard'>
                <NavBar/>
                <h2>Dashboard</h2>
                
                    <h2 ><Link to='/activities/1' id='expandedactivitylink'>Sample Activity</Link></h2>
                
            </div>
            
        )
    }
}


export default Dashboard;
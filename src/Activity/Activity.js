import React from 'react';
import './Activity.css'


class activity extends React.Component{



    render(){
        return(
            <div className='Activity'>
                <div className='activityItem'>
        <h6 id='user-name'>{this.props.name}</h6>
                <h4 id='activity-title'>{this.props.title}</h4><br/>
                <div id='stat-bar'>
                    <p>Distance <br/> {this.props.distance} mi</p> 
                    <p className='stat-bar-div'>|</p>
                    <p>Pace<br/> { (this.props.duration / this.props.distance)
                            .toFixed(2)}: /mi</p>
                    <p className='stat-bar-div'>|</p>
                    <p>Time <br/> {this.props.duration} min</p>
                    
                </div>
                    
                    
                    
                </div>
                
            </div>
        
        )
    }
}

export default activity;
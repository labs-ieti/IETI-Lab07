import React from 'react'
import taskImg from '../assets/img/Tarea.png'
import circlesImg from '../assets/img/circles.png'
import './styles/Task.css'
//import 'bootstrap/dist/css/bootstrap.css' 

class Task extends React.Component {
    render(){
        const { title, description, DueDate, AssignedTo, Status, leftColor,rightColor }=this.props

        return (
            <div className="card mx-auto Task-Card"
            style={{
                backgroundImage:`url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={taskImg} className='float-right'/>
                        </div>
                        <div className='col-6 Task-Card-Info'>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <p>{DueDate}</p>
                            <p>{AssignedTo}</p>
                            <p>{Status}</p>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default Task
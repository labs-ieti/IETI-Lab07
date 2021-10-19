import React from 'react'
import taskImg from '../assets/img/Tarea.png'
import circlesImg from '../assets/img/circles.png'
import './styles/Task.css'
//import 'bootstrap/dist/css/bootstrap.css' 

class Task extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                image:'../assets/img/Tarea.png'
            })
        }, 5000);
    }

    render(){
        const {title, description, DueDate, AssignedTo, Status, leftColor, rightColor }=this.props

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
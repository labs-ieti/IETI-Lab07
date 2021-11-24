import React from "react";
import TaskForm from "../components/TaskForm";
import Task from "../components/Task";
import '../components/styles/TaskNew.css'

class TaskNew extends React.Component{

    state={
        form:{
            title:'',
            description:'',
            dueDate:'',
            assignedTo:'',
            status:'',
            leftColor:'',
            rightColor:''
        }
    }

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
            
        })
    }

    handleSubmit = async e => {
        e.preventDefault()



        const options = {
            method: 'POST',
            body: JSON.stringify(this.state.form),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        await fetch("http://localhost:8000/api/task", options)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    
    render(){
        return(
            <div className='fondo mx-auto'>
                <div className="row">
                    <div className="col-sm">
                        <Task {...this.state.form} />
                    </div>

                    <div className="col-sm">
                        <TaskForm 
                            onChange={this.handleChange}
                            form={this.state.form}
                            onSubmit={this.handleSubmit}
                        /> 
                    </div>
                </div>       
            </div>
        )
    }
}

export default TaskNew
import React from "react";
import TaskForm from "../components/TaskForm";
import Task from "../components/Task";
import '../components/styles/TaskNew.css'

class TaskNew extends React.Component{

    state={
        form:{
            title:'',
            description:'',
            DueDate:'',
            AssignedTo:'',
            Status:'',
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
                        /> 
                    </div>
                </div>       
            </div>
        )
    }
}

export default TaskNew
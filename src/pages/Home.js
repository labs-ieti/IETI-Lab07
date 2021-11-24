import React from 'react'
import TaskList from '../components/TaskList';
//import Task from '../components/Task'
import Welcome from '../components/Welcome';
//import fondac from '../assets/img/Fondo2.png'
import '../components/styles/Home.css'
import AddButton from '../components/AddButton';


class Home extends React.Component{

    state={
        data:[]
    }

    async componentDidMount() {
        await this.initialData();
    }

    initialData = async () => {
        let res = await fetch("http://localhost:8000/api/task")
        let data = await res.json()

        this.setState({
            data
        })

        console.log(data)
        


    } 

    render(){
        return(
            <div className='fondo2 mx-auto'>             
                <Welcome/>
                <TaskList
                    tareas={this.state.data}
                />
                <AddButton/>                
            </div>
        )
    }
}
export default Home
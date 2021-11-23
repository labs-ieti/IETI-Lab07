import React from 'react'
import TaskList from '../components/TaskList';
//import Task from '../components/Task'
import Welcome from '../components/Welcome';
//import fondac from '../assets/img/Fondo2.png'
import '../components/styles/Home.css'
import AddButton from '../components/AddButton';


class Home extends React.Component{
    state={
        data:[
            {
                "id": 1,
                "title":"Tarea Test Hoho",
                "description":"Este es un intento",
                "DueDate":"14/10/2021",
                "AssignedTo":"Felipe Marin",
                "Status":"EN PROCESO",
                "img":"https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06",
                "leftColor":"#A74CF2",
                "rightColor":"#617BFB"
            },
            {
                "id": 2,
                "title":"Tarea Test Mero Mero",
                "description":"Este es un intento",
                "DueDate":"14/10/2021",
                "AssignedTo":"Felipe Marin",
                "Status":"EN PROCESO",
                "img":"https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06",
                "leftColor": "#17EAD9",
                "rightColor": "#6078EA"
            },
            {
                "id": 3,
                "title":"Tarea Test Hijole",
                "description":"Este es un intento",
                "DueDate":"14/10/2021",
                "AssignedTo":"Felipe Marin",
                "Status":"EN PROCESO",
                "img":"https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06",
                "leftColor": "#FAD961",
                "rightColor": "#F76B1C"
            }
        ]
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
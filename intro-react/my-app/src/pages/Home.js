import React from 'react'
import Task from '../components/Task'
import Welcome from '../components/Welcome';
import fondac from '../assets/img/Fondo2.png'
import '../components/styles/Home.css'


class Home extends React.Component{
    render(){
        return(
            <div className='fondo mx-auto' /*style={{
                backgroundImage:`url(${fondac})`
            }}*/> 
                <Welcome/>
                <Task
                /**Funciona si le pongo Login y quito lo de abajo */
                    title='Tarea Test hOHO'
                    description='Este es un intento'
                    DueDate='14/10/2021'
                    AssignedTo='Felipe Marin'
                    Status='EN PROCESO'
                    img='https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
                    leftColor='#A74CF2'
                    rightColor='#617BFB'
                /> 
            </div>
        )
    }
}
export default Home
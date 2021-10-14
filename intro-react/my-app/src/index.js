import React from 'react';
import ReactDOM from 'react-dom';
//import Login from './Login';
import Task from './components/Task'
import 'bootstrap/dist/css/bootstrap.css' 

ReactDOM.render(
  <React.StrictMode>
    <Task
      title='Tarea Test hOHO'
      description='Este es un intento'
      DueDate='14/10/2021'
      AssignedTo='Felipe Marin'
      Status='EN PROCESO'
      img='https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
      leftColor='#A74CF2'
      rightColor='#617BFB'
    /> 
  </React.StrictMode>,
  /*Al finalizar dejarla en Login*/
  document.getElementById('root')
);
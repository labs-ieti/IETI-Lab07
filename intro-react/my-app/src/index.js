import React from 'react';
import ReactDOM from 'react-dom';
//import Login from './pages/Login';
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.css' 
//import { LocalGasStation } from '@material-ui/icons';

// https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06


const container = document.getElementById('root')
ReactDOM.render(<Home/>, container
  /*<React.StrictMode>
    <Login/>
  </React.StrictMode>,container
  /*Al finalizar dejarla en Login*/
  
);
import React from "react";
import './styles/AddButton.css'
import buttomImg from '../assets/img/add.png'
import { Link } from 'react-router-dom'

const AddButton = () => (
    <Link to="/newTask">
        <img src={buttomImg} className="Task-Add" alt="task"/>
    </Link>
)

export default AddButton
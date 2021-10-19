import React from "react";
import Task from "./Task";

const TaskList = ({tareas}) => (
    <div>
        {tareas.map((task)=> {
            return(
                <Task
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    DueDate={task.DueDate}
                    AssignedTo={task.AssignedTo}
                    Status={task.Status}
                    img={task.img}
                    leftColor={task.leftColor}
                    rightColor={task.rightColor}
                />
            )
        })}
    </div>
)

export default TaskList
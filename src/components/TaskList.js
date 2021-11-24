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
                    dueDate={task.dueDate}
                    assignedTo={task.assignedTo}
                    status={task.status}
                    img={task.img}
                    leftColor={task.leftColor}
                    rightColor={task.rightColor}
                />
            )
        })}
    </div>
)

export default TaskList
import React from "react"

export default function TodoItem(props){
    return (
        <div className="task" style={{textDecoration: props.task.completed ? "line-through" : ""}}>
            {props.task.title}
            <button onClick={()=>props.removeTask(props.index)}>x</button>
            <button onClick={()=>props.markCompleted(props.index)}>Completed</button>
        </div>
    )
}
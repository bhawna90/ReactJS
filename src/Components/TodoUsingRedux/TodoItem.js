import React from "react"
import { useDispatch } from "react-redux"
import { removeTask } from "./actions"

export default function TodoItem(props){
    const dispatch = useDispatch()
    return (
        <div className="task" style={{textDecoration: props.task.completed ? "line-through" : ""}}>
            {props.task.title}
            <button onClick={()=>dispatch(removeTask(props.index))}>x</button>
            <button>edit</button>
            {/* <button onClick={()=>props.markCompleted(props.index)}>Completed</button> */}
        </div>
    )
}
import React, {useState} from "react"
import CreateTask from "./CreateTask"
import TodoItem from "./TodoItem"
import "./TodoList.css"
import { useSelector } from "react-redux"

export default function TodoList(){
    
    // function editTask(value,index){
    //     const tempTasks = [...tasks]
    //     tempTasks[index].title=value
    //     setTasks(tempTasks)
    // }
    const {tasks} = useSelector(state => state.todo)
    return (
        <div className="todoContainer">
            <div className="header">Todo List</div>
            <div className="tasks">
                {tasks.map((task,index) => 
                    <TodoItem task={task} index={index}></TodoItem>
                )}
            </div>
            <div className="createContainer">
                <CreateTask></CreateTask>
            </div>
        </div>
    )
}



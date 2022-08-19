import React, {useState} from "react"
import CreateTask from "./CreateTask"
import TodoItem from "./TodoItem"
import "./TodoList.css"

export default function TodoList(){
    const [tasks, setTasks] = useState([
    {
        title: "Learn ReactJs",
        completed: false
    },
    {
        title: "Implement a todo application",
        completed: false
    },
    {
        title: "Learn useEffect",
        completed: true
    }
    ])

    function addTask(value){
        //adds to the list
        setTasks([...tasks, {title: value, completed: false}])

        console.log("addtask called", value);
    }
    function markCompleted(index){
        const tempTasks = [...tasks]
        tempTasks[index].completed=true
        setTasks(tempTasks)
    }
    function removeTask(index){
        const tempTasks = [...tasks]
        tempTasks.splice(index,1)
        setTasks(tempTasks)
    }
    return (
        <div className="todoContainer">
            <div className="header">Todo List</div>
            <div className="tasks">
                {tasks.map((task,index) => 
                    <TodoItem task={task} index={index} markCompleted={markCompleted} removeTask={removeTask}></TodoItem>
                )}
            </div>
            <div className="createContainer">
                <CreateTask addTask={addTask}></CreateTask>
            </div>
        </div>
    )
}



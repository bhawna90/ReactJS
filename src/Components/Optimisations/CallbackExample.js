import React, { useState, useCallback } from "react"
import Todo from "./Todo"

export default function CallbackExample(){
    const [counter, setCounter] = useState(0)
    const [todos, setTodos] = useState([])

    const increment = () => {
        setCounter(counter+1)
    }
    const addItem = useCallback(()=>{
        setTodos([...todos, "item"])
    },[todos])
    // const addItem = () => {
    //     setTodos([...todos, "item"])
    // }
    console.log("parent comp rendered");
    return (<div style={{border:"1px solid black", padding:"20px"}}>
        <Todo todos={todos} addItem={addItem}></Todo>
        <br/><br/>
        <div>
            Counter: {counter}
        </div>
        <button onClick={increment}>Increment</button>
    </div>)
}
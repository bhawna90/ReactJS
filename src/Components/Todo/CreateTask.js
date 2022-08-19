import React, { useState } from "react"

export default function CreateTask(props){
    const [value, setValue] = useState("")
    function handleChange(e){
        setValue(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        if(value)
        {
            props.addTask(value)
            setValue("")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="Add a task" 
            onChange={handleChange} className="createInput"></input>
        </form>
    )
}
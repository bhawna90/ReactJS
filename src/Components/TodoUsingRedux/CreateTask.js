import React, { useState } from "react"
import {useDispatch} from "react-redux"
import {addTask} from "./actions/index"

export default function CreateTask(props){
    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    function handleChange(e){
        setValue(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        if(value)
        {
            dispatch(addTask(value))
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
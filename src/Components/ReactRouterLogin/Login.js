import React, { useState } from "react"
import {useNavigate, Navigate} from "react-router-dom"

export default function Login(props){
    const [username, setUsername] =useState("")
    const [password, setPassword] =useState("")
    const navigate = useNavigate()

    function handleClick(e){
        e.preventDefault()
        if(username && password){
            navigate("/welcome",{state: {data:"hello"}})
        }

    }
    return (<div>
        <form>
            <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
            <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={handleClick}>Login</button>
        </form>
    </div>)
}
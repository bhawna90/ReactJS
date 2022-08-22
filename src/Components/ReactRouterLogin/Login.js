import React, { useState } from "react"
import {useNavigate} from "react-router-dom"

export default function Login(){
    const [username, setUsername] =useState("")
    const [password, setPassword] =useState("")
    const navigate = useNavigate()

    function handleClick(e){
        e.preventDefault()
        if(username && password){
            navigate("/welcome")
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
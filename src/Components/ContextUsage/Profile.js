import React, {useState, useContext} from "react"
import ProfileData from "./contexts/ProfileData"

export default function Profile(){
    const [inputUsername, setInputUsername] = useState("")
    const data = useContext(ProfileData)
    return (
        <div style={{marginTop:"30px", display:"flex", flexDirection:"column", width:"50%"}}>
            <input type="text" placeholder="username" value={inputUsername} onChange={(e)=>setInputUsername(e.target.value)}></input>
            <button style={{marginTop:"10px"}} onClick={()=>data.setUsername(inputUsername)}>submit</button>
        </div>
    )
}
import React, {useContext} from "react"
import ProfileData from "./contexts/ProfileData"

export default function Header(){
    const data = useContext(ProfileData)
    console.log(data);
    return (
        <div style={{display:"flex", justifyContent:"flex-end"}}>
            <div>
                {data.username}
            </div>
        </div>
    )
}
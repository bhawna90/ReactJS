import React, {useContext} from "react"
import {UserData} from "./CompA"


export default function CompC(props){
    // console.log("inside compC",props.value);
    const data = useContext(UserData)
    console.log("compC",data);
    return (
        <div>
            Comp C {data.username}
        </div>
    )
}
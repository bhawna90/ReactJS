import React, { useEffect, useState } from "react"
import "./Attendance.css"

export default function ApiCallComp(props){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(result => {
            const arr = result.map(student=>{
                return {...student, attendance: 0}
            })
            console.log(arr)
            setData(arr); 
            setLoading(false)
        })
    },[])

    function markAttendance(user){
        // setData(currentValue=>
        //     [{unchanged},{changed},{unchanged},]=currentValue.map(value=>{
        //         if(value.id === user.id){
        //             return {...value,attendance:value.attendance+1}
        //         }
        //         return value
        //     })
        //     )

            const tempData = data.map(value=>{
                if(value.id === user.id){
                    return {...value,attendance:value.attendance+1}
                }
                return value
            })
            setData(tempData)
    }
    return (
        <div>
            {
            loading ? 
            <div>Please wait, data is being loaded</div> 
             : 
            data.map((user,index)=>
                <div className="listItem">
                    <li className="item" key={index}>{user.name}</li>
                    <button onClick={()=>markAttendance(user)}>mark attendance</button>
                    {console.log("attendance for:",user.name," is:", user.attendance)}
                    <div className="attendanceText">{user.attendance}</div>
                </div>
                
                )
            
            }
        </div>
    )
}
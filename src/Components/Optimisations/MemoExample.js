import React, {useMemo, useState} from "react"

export default function MemoExample(){
    const [counter, setCounter] = useState(0)
    const [clicked, setClicked] = useState(false)

    const updateValue=()=>{
        setCounter(counter+1)
    }

    const calculateData = (counter) =>{
        console.log("calculating data");
        for(let i=0;i<1000000000; i++){
        }
        return counter
    }

    const newData = useMemo(()=>{
        return calculateData(counter)
    },[counter])

    // const newData = calculateData(counter);

    return (
        <div>
            <button onClick={updateValue}>increment</button>
            <div>counter value: {newData}</div>
            <button onClick={()=>setClicked(!clicked)}>
                {clicked? "Clicked":"Click me"}
            </button>
        </div>
    )
}
import React, {useRef, useState} from "react"
import ChildComp from "./ChildComp"

export default function Counter(){
    const [counter, setCounter] = useState(0)
    const [value, setValue] = useState("")
    console.log("Counter component rerender")
    const inputValue = useRef()

    return (
        <div>
            <div>Counter : {counter}</div>
            <button onClick={()=>setCounter(counter+1)}>Increment</button>
            <input type="text" ref={inputValue}></input>
            <ChildComp counter={counter} setCounter={setCounter}></ChildComp>
        </div>
    )
}
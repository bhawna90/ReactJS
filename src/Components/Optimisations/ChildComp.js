import React from "react"

function ChildComp(props){
    console.log("Child component rerender");
    return (
        <div>Child component:{props.counter}
            <button onClick={()=>props.setCounter(props.counter+1)}>Increment counter</button>
        </div>
    )
}

export default React.memo(ChildComp)
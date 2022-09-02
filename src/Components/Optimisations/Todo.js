import React,{memo} from "react"

function Todo({todos, addItem}){
    console.log("child component rendered");
    return <div style={{border:"1px solid black", padding: "10px"}}>
        <h2>Todo Items</h2>
        {todos.map((todo,index)=>{
            return <div key={index}>{todo+index}</div>
        })}
        <button onClick={addItem}>Add item</button>
    </div>
}

export default memo(Todo)
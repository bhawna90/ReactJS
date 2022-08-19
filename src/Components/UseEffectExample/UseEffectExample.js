import React, { useEffect, useState } from "react";

export default function UseEffectExample(){
    const [val, setVal] = useState(0)
    useEffect(()=>{
        let mounted = true;
        setTimeout(()=>{
            if(mounted)
                setVal(1)
        },3000)

        return (()=>{
            mounted=false
        })
    },[])
    return (
        <div>Hello</div>
    )
}
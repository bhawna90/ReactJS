import React from "react"
import {Navigate, useLocation} from "react-router-dom"

export default function Welcome(props){
    const {state} = useLocation()
    console.log(state);
    if(!props.authorized){
        return <Navigate to="/login"></Navigate>
    }

    return (<div>
        <h1>
            welcome page
        </h1>
    </div>)
}
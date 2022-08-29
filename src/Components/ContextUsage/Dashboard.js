import React from "react"
import MainComponent from "./MainComponent"
import SideNav from "./SideNav"

export default function Dashboard(){
    return (
        <div style={{display: "flex", marginTop: "10px"}}>
            <SideNav />
            <MainComponent></MainComponent>
        </div>
    )
}
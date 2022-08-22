import React from "react"
import {Routes, Route} from "react-router-dom"
import LandingPage from "./LandingPage"
import Signup from "./Signup"
import Login from "./Login"
import Welcome from "./Welcome"

export default function RouterFirstComp(){
    return (
        <Routes>
            <Route path="/" element={<LandingPage></LandingPage>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/welcome" element={<Welcome></Welcome>}></Route>
        </Routes>
    )
}
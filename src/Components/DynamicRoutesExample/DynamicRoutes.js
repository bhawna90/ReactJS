import React from "react"
import {Routes, Route, Link} from "react-router-dom"
import Home from "../ReactRouterExample/Home"
import About from "../ReactRouterExample/About"
import Profile from "./Profile"
import Users from "./Users"

export default function DynamicRoutes(){
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/users">Users</Link></li>
                {/* <li><Link to="/users/Bhawna">Bhawna</Link></li>
                <li><Link to="/users/amit">Amit</Link></li>
                <li><Link to="/users/amit/22">Amit</Link></li> */}
            </ul>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/users" element={<Users></Users>}></Route>
                {/* <Route path="/users/bhawna" element={<Profile></Profile>}></Route>
                <Route path="/users/amit" element={<Profile></Profile>}></Route> */}
                <Route path="/users/:name" element={<Profile></Profile>}></Route>
                <Route path="/users/:name/:age" element={<Profile></Profile>}></Route>
            </Routes>
        </div>
    )
}
import React from "react"
import {Routes, Route, Link} from "react-router-dom"
import Home from "../ReactRouterExample/Home"
import About from "../ReactRouterExample/About"
import Users from "./Users"
import Profile from "./Profile"
import Search from "./Search"

export default function NestedRoutes(){
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="users">Users</Link></li>
                
            </ul>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="about" element={<About></About>}></Route>
                <Route path="users" element={<Users></Users>}>
                    <Route path="profile" element={<Profile></Profile>}></Route>
                    <Route path="search" element={<Search></Search>}></Route>
                </Route>
            </Routes>
        </div>
    )
}
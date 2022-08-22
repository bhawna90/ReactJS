import React from "react"
import {Link, Routes, Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

export default function ReactRouter(){
    return (
        <div>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/contact">contact us</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/one/two" element={<Home></Home>}></Route>
                <Route  path="/about" element={<About></About>}></Route>
                <Route  path="/contact" element={<Contact></Contact>}></Route>
            </Routes>
        </div>
    )
}
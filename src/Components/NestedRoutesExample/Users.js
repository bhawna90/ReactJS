import React from "react"
import {Link, Outlet, Routes, Route} from "react-router-dom"
import Profile from "./Profile"
import Search from "./Search"

export default function Users(){

    return (
        <div>
            <Link to="profile"><button>Go to profile</button></Link>
            <Link to="/users/search"><button>Search user</button></Link>

            <Outlet></Outlet>
        </div>
    )
}
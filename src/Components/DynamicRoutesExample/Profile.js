import React from "react"
import {useParams, Link} from "react-router-dom"

export default function Profile(){
    const params = useParams()
    const {name, age} = params
    console.log(params);
    return (
        <div>
            {name}'s Profile
            <Link to="/users/edit">Edit</Link>
        </div>
    )
}
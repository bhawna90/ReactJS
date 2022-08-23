import React from "react"
import {useParams, Link} from "react-router-dom"

export default function Users(){
    const usersList = [{name:"amit",age:12}, {name:"shikha",age:12}, {name:"sheetal",age:12}]
    return (
        <div>
            {
                usersList.map(user=>
                    <div><Link to={`/users/${user.name}`}>{user.name}</Link></div>
                )
            }
        </div>
    )
}
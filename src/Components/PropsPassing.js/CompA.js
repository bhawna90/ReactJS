import React, { useState, createContext } from "react"
import CompB from "./CompB"


const UserData = createContext()

export default function CompA(){
    const [value, setValue] = useState("hello")
    return (
        <UserData.Provider value={{value:value, username:"bhawna",email:"bhawnagaur@gmail.com"}}>
            <div>
                <CompB></CompB>
            </div>

        </UserData.Provider>
    )
}

export { UserData }
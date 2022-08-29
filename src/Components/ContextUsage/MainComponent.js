import React, { createContext, useState } from "react"
import Header from "./Header"
import UserPage from "./UserPage"
import ProfileData from "./contexts/ProfileData"

export default function MainComponent(){
    const [username, setUsername] = useState("bhawna")
    return (
        <ProfileData.Provider value={{
            username:username,
            setUsername: setUsername
        }}>
            <div style={{width: "80%", padding: "20px"}}>
                <Header></Header>
                <UserPage></UserPage>
            </div>
        </ProfileData.Provider>
    )
}
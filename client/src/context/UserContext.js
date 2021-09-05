import React, { useState } from "react";


const UserContext = React.createContext({});

// creating Provider and Consumer and exporting them.

export function UserProvider(props){

    const [token, setToken] = useState(null)


    return (
        <UserContext.Provider value={{token, setToken}}>
            {props.children}
        </UserContext.Provider>
    )
}

export const UserConsumer = UserContext.Consumer


export default UserContext;
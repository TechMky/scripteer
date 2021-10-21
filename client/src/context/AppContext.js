import React, { useState } from "react";
import { setInterceptor } from "../queries/service";


const AppContext = React.createContext({});

// creating Provider and Consumer and exporting them.

export function AppProvider(props){

    const presentToken = localStorage.getItem('token')

    if (presentToken) {
        setInterceptor(presentToken)
    }

    const [token, setStateToken] = useState(presentToken || null)
    const [batches, setBatches] = useState([])
    const [activeBatch, setActiveBatch] = useState(0)

    const setToken = (newToken) => {
        setInterceptor(newToken)
        setStateToken(newToken)
    }
    return (
        <AppContext.Provider value={{token, setToken, batches, setBatches, activeBatch, setActiveBatch}}>
            {props.children}
        </AppContext.Provider>
    )
}

export const AppConsumer = AppContext.Consumer


export default AppContext;
import React, { useState } from "react";


const AppContext = React.createContext({});

// creating Provider and Consumer and exporting them.

export function AppProvider(props){

    const presentToken = localStorage.getItem('token')
    const [token, setToken] = useState(presentToken || null)
    const [batches, setBatches] = useState([])
    const [activeBatch, setActiveBatch] = useState(null)


    return (
        <AppContext.Provider value={{token, setToken, batches, setBatches, activeBatch, setActiveBatch}}>
            {props.children}
        </AppContext.Provider>
    )
}

export const AppConsumer = AppContext.Consumer


export default AppContext;
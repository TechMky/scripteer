import React, { useState } from "react";


const AppContext = React.createContext({});

// creating Provider and Consumer and exporting them.

export function AppProvider(props){

    const [token, setToken] = useState(null)
    const [batches, setBatches] = useState([1,2,3])
    const [activeBatch, setActiveBatch] = useState(2)


    return (
        <AppContext.Provider value={{token, setToken, batches, setBatches, activeBatch, setActiveBatch}}>
            {props.children}
        </AppContext.Provider>
    )
}

export const AppConsumer = AppContext.Consumer


export default AppContext;
import React, {useState} from 'react'

export const userContext = React.createContext()

export default function userContext ({children}) {
    const [user, setUser] = useState('')

    return (
        <userContext.Provider  value = {{user, setUser}} >
            {children}
        </userContext.Provider>
    )
}

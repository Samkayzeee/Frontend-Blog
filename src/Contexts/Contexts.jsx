import React, { createContext, useState } from 'react'
const ProfileContexts = createContext(null)
function Contexts({ children }) {
    const [newName, setNewName] = useState()
    const [newEmail, setNewEmail] = useState()
    return (
        <ProfileContexts.Provider value={{ newName, setNewName, newEmail, setNewEmail }}>
            {children}
        </ProfileContexts.Provider>
    )
}

export { ProfileContexts}
export default Contexts

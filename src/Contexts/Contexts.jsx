import React, { createContext, useState } from 'react'
const ProfileContexts_1 = createContext(null)
function Contexts({ children }) {
    const [newName, setNewName] = useState()
    return (
        <ProfileContexts_1.Provider value={{ newName, setNewName }}>
            {children}
        </ProfileContexts_1.Provider>
    )
}

export { ProfileContexts_1 }
export default Contexts

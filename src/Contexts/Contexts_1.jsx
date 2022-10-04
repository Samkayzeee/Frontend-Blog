import React, { createContext, useState } from 'react'

const ProfileContexts_2 = createContext(null)
function Contexts_1({ children }) {
    const [newEmail, setNewEmail] = useState()
    return (
        <ProfileContexts_2.Provider value={{ newEmail, setNewEmail }}>
            {children}
        </ProfileContexts_2.Provider>
    )
}

export { ProfileContexts_2 }
export default Contexts_1
import React, { useState, useContext, useRef } from 'react'
import Navbar_2 from '../Navbar/Navbar_2'
import './Profile.css'
import { ProfileContexts} from '../../Contexts/Contexts'


function Profile() {
    const [clicked, setClicked] = useState(false)
    const newFullname = useRef(null)
    const newEmaill = useRef(null)
    const Pro_detail = useContext(ProfileContexts)
    const editProfile = () => {
        setClicked(!clicked)
    }
    const saveNewDetails = (event) => {
        event.preventDefault()
       Pro_detail.setNewName(newFullname.current.value)
        Pro_detail.setNewEmail(newEmaill.current.value)
        console.log(Pro_detail.newName);
        console.log(Pro_detail.newEmail);
    }
    return (
        <main>
            <div className='navDiv'>
                <Navbar_2 />
            </div>
            <div className='cardDiv d-flex justify-content-center mt-4 pb-5'>
                <div className='card cards d-flex align-items-center p-3'>
                    <div className="imgDiv mb-2"><img src='/watsapp5.jpg' /></div>
                    <p className='fullname'>Fullname here</p>
                    <small>A little info about the user here</small>
                    <button className='btn btn-primary text-white mt-2'>
                        The user email should be displayed here
                    </button>
                    <button className="btn btn-outline-info text-white mt-4" onClick={editProfile}>
                        Edit Your Profile</button>
                    {
                        clicked ? <form className='d-flex align-items-center mt-4 editForm'>
                            <label>Change your name</label>
                            <input ref={newFullname} className='input ps-2 mb-3' placeholder='Fullname' />
                            <label>Change your email address</label>
                            <input ref={newEmaill} className='input ps-2 mb-3' placeholder='Email' />
                            <label>Change your password</label>
                            <section className='inputs'>
                                <input className='ps-2 passwordInput mb-3' placeholder='Password' type='password' />
                            </section>
                            <label>Confirm new password</label>
                            <section className='inputs'>
                                <input className='ps-2 passwordInput' placeholder='Password' type='password' />
                            </section>
                            <button className="btn btn-outline-success text-white mt-4" onClick={saveNewDetails}>
                                Save Details</button>
                        </form>
                            : ''
                    }
                </div>
            </div>
        </main >
    )
}

export default Profile
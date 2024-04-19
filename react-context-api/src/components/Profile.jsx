import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
    const { user } = useContext(UserContext);

    if (!user) return <div>Please Login</div>
    return (
        <div>
            <h3 className='text-3xl'>Profile</h3>
            <br />
            <h4 className='text-3xl'>Username: {user.username}</h4>
        </div>
    )



}

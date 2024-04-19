import React from 'react'
import UserContext from '../context/UserContext'
import { useState, useContext } from 'react'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }

    return (
        <div>
            <h3>Login</h3>
            <br />

            <input 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text" 
            placeholder='username' 
            className='w-80 border' />
            
            <br /><br />

            <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" 
            placeholder='password' 
            className='w-80 border' />
            <br /><br />

            <button onClick={handleSubmit}>Sign In</button>

        </div>
    )
}

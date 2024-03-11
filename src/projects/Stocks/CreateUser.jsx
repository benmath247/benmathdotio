import React, { useState } from 'react';
import { redirect } from 'react-router-dom';

const CreateStocksUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(import.meta.env.VITE_BACKEND + 'api/create-user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, email, first_name: firstName, last_name: lastName }),
            });
            if (!response.ok) {
                setMessage("Cannot create account")
            }
            else {
                window.location.href = '/stocks/'
            }
        } catch (error) {
            console.error('Failed to create user:', error);
        }
    };

    return (
        <div className='container' style={{ marginTop: '100px' }}>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label>First Name:</label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Create User</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateStocksUser;

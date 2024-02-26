import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userInfo, setUserInfo] = useState(null);

    const fetchUserInfo = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(import.meta.env.VITE_BACKEND + 'api/user-info/', {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setUserInfo(data);
            } else {
                throw new Error('Failed to fetch user info');
            }
        } catch (error) {
            console.error('Failed to fetch user info:', error);
        }
    };
    useEffect(() => {

        if (localStorage.getItem('token')) {

            fetchUserInfo();
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(import.meta.env.VITE_BACKEND + 'api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            localStorage.setItem('token', data.token);
            // window.location.href = '/user-info'
        } catch (error) {
            console.error('Login failed:', error);
        }
    };


    const handleCreateUser = () => {
        window.location.href = '/create-user'

    }

    return (
        <div style={{ margin: '200px' }}>

            <div>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                    <button onClick={handleCreateUser}>Create User</button>
                </form>
            </div>

        </div>
    );
};

export default LoginForm;

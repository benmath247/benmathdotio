import React, { useState, useEffect } from 'react';
import LoginForm from './Login';

function UserInfo() {

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


    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login'
    };


    return (
        <div>
            {userInfo ? (
                <div>
                    <p>Username: {userInfo.username}</p>
                    <p>Email: {userInfo.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : <LoginForm />}
        </div>
    );
};

export default UserInfo;

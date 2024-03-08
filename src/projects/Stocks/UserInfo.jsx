import React, { useState, useEffect } from 'react';
import LoginForm from './Login';

function UserInfo({ userInfo }) {



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
                    <p>Cash Balance: ${userInfo.profile.balance}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : <LoginForm />}
        </div>
    );
};

export default UserInfo;

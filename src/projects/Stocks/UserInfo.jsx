import React from 'react';
import LoginForm from './Login';
import './UserInfo.css'; // Import custom CSS for styling

function UserInfo({ userInfo }) {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login'
    };

    return (
        <div className="user-info-container">
            {userInfo ? (
                <table className="user-info-table">
                    <tbody>
                        <tr>
                            <td>Username:</td>
                            <td>{userInfo.username}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{userInfo.email}</td>
                        </tr>
                        <tr>
                            <td>Cash Balance:</td>
                            <td>${userInfo.profile.balance}</td>
                        </tr>
                        <tr>
                            <td colSpan="2"><button className="logout-button" onClick={handleLogout}>Logout</button></td>
                        </tr>
                    </tbody>
                </table>
            ) : <LoginForm />}
        </div>
    );
};

export default UserInfo;

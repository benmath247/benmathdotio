import React, { useEffect } from 'react';
import axios from 'axios';

function FacebookLoginButton() {
    useEffect(() => {
        // Load the Facebook SDK asynchronously
        window.fbAsyncInit = function () {
            FB.init({
                appId: '765328901011974',
                cookie: true,
                xfbml: true,
                version: 'v12.0' // Use the latest version of Facebook Graph API
            });

            // Additional initialization code here
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, []);

    const handleLogin = () => {
        window.FB.login(response => {
            if (response.authResponse) {
                // Retrieve CSRF token from cookies
                const csrfToken = getCookie('csrftoken');

                // Send the access token and CSRF token to your Django backend
                axios.post('https://localhost:8000/users/auth/login/facebook/', {
                    accessToken: response.authResponse.accessToken,
                }, {
                    headers: {
                        'X-CSRFToken': csrfToken
                    }
                })
                    .then(response => {
                        console.log(response.data);
                        console.log('User is logged in', response.authResponse.accessToken);
                        // Handle the response from your Django backend
                    })
                    .catch(error => {
                        console.error('Error logging in with Facebook:', error);
                        // Handle error
                    });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    };

    // Function to retrieve CSRF token from cookies
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    return (
        <button onClick={handleLogin}>
            Login with Facebook
        </button>
    );
}

export default FacebookLoginButton;

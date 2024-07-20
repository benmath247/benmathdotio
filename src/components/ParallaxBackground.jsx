// src/components/ParallaxBackground.js
import React from 'react';
import './ParallaxBackground.css';

const ParallaxBackground = ({ children }) => {
    return (
        <div className="parallax-container">
            <div className="parallax">
                {children}
            </div>
        </div>
    );
};

export default ParallaxBackground;

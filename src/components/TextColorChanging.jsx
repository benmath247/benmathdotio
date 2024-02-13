import React, { useState, useEffect } from 'react';

const TextColorChanging = ({ text, size }) => {
    const vscodeColors = [
        "#6A9955", // Comment
        "#4EC9B0", // Cyan
        "#B5CEA8", // Green
        "#CE9178", // Orange
        "#D16969", // Pink
        "#C586C0", // Purple
        "#D16969", // Red
        "#DCDCAA", // Yellow
        "#569CD6", // Blue
        "#2A2D2E"  // Editor Line Highlight
    ];

    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex(prevIndex => (prevIndex + 1) % vscodeColors.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [vscodeColors.length]);

    return (
        <div className="text-container" style={{ '--text-color': vscodeColors[colorIndex], fontSize: `${size}px` }}>
            {text}
        </div>
    );
};

export default TextColorChanging;

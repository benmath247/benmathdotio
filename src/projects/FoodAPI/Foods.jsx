import React, { useState, useEffect } from 'react';

function Foods() {
    const [query, setQuery] = useState('');
    const [foodData, setFoodData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const key = 'V4IOwEOCc4VcjgwWffxvNESq9zD9E3P2f20JFWwo';

    const handleSearch = async () => {
        if (!query.trim()) return;
        setLoading(true);
        try {
            const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${key}&query=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setFoodData(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        handleSearch();
    }, []); // Run whenever the query state changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (<><div className="container mt-5">
        <h1 className="mb-4">Speech-to-Text Dictation Tool</h1>
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a food..."
            />
            <button onClick={handleSearch}>Search</button>
            {foodData && foodData.foods && (
                <ul>
                    {JSON.stringify(foodData)}
                </ul>
            )}
        </div>

    </div></>)
}

export default Foods;

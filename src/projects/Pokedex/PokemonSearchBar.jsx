import React, { useState } from 'react';
import axios from 'axios';
import Fuse from 'fuse.js';

const PokemonSearchBar = ({ setPokemonList }) => {
    const [searchInput, setSearchInput] = useState('');
    const [allPokemon, setAllPokemon] = useState([]);

    const fetchAllPokemon = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1025');
            setAllPokemon(response.data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    if (allPokemon.length === 0) {
        fetchAllPokemon();
    }

    const handleSearch = (query) => {
        const options = {
            keys: ['name'],
            includeScore: true,
            threshold: 0.2, // Adjust this threshold according to your needs
        };
        const fuse = new Fuse(allPokemon, options);
        const result = fuse.search(query);
        const filteredPokemonList = result.map(({ item }) => item);
        setPokemonList(filteredPokemonList);
    };

    const handleSubmit = () => {
        // Trigger the search with the current input value
        handleSearch(searchInput);
    };

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    };

    return (
        <div className='col-md-3' style={{ marginTop: '5px' }}>
            {/* Search bar */}
            <input
                type="text"
                value={searchInput}
                onChange={handleChange}
                placeholder="Search Pokémon"
            />
            {/* Submit button */}
            <button onClick={handleSubmit} style={{ padding: '2px' }}>Search</button>
        </div>
    );
};

export default PokemonSearchBar;

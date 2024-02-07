import React, { useState } from 'react';
import axios from 'axios';

const PokemonSearchBar = ({ setPokemonList }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = (query) => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1025')
            .then((response) => {
                const allPokemon = response.data.results;
                // Filter the list based on the query
                const filteredPokemonList = allPokemon.filter((pokemon) =>
                    pokemon.name.toLowerCase().includes(query.toLowerCase())
                );
                // Update the filtered list
                setPokemonList(filteredPokemonList);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
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

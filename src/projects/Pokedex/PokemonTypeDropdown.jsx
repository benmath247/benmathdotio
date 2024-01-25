import React, { useState } from 'react';
import axios from 'axios';

// Define a dictionary of Pokemon types and their corresponding colors
const pokemonTypes = {
    Normal: "#A8A878",
    Fighting: "#C03028",
    Flying: "#A890F0",
    Poison: "#A040A0",
    Ground: "#E0C068",
    Rock: "#B8A038",
    Bug: "#A8B820",
    Ghost: "#705898",
    Steel: "#B8B8D0",
    Fire: "#F08030",
    Water: "#6890F0",
    Grass: "#78C850",
    Electric: "#F8D030",
    Psychic: "#F85888",
    Ice: "#98D8D8",
    Dragon: "#7038F8",
    Dark: "#705848",
    Fairy: "#EE99AC",
};

function PokemonTypeDropdown({ setDamageRelationsData, setColorBackground, setPokemonList, selectedType, setSelectedType }) {

    // Function to handle the change of selected Pokemon type
    const handleTypeChange = async (event) => {
        const newSelectedType = event.target.value;
        setSelectedType(newSelectedType);
        setColorBackground(newSelectedType ? pokemonTypes[newSelectedType] : 'red');
        
        // Check if a type is selected or if the selectedType is not empty
        if (newSelectedType || selectedType !== '') {
            try {
                // Convert the first letter of newSelectedType to lowercase
                const formattedType = newSelectedType.charAt(0).toLowerCase() + newSelectedType.slice(1);

                // Make a request to the PokeAPI with the formatted type
                const response = await axios.get(`https://pokeapi.co/api/v2/type/${formattedType}`);
                const pokemonData = response.data.pokemon.map(item => item.pokemon);
                setDamageRelationsData(response.data.damage_relations)
                // Set the new PokemonList using the extracted names
                setPokemonList(pokemonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    };

    return (
        <div>
            {/* Dropdown menu to select Pokemon type */}
            <select style={{ height: '30px', width: '250px' }} onChange={handleTypeChange} value={selectedType}>
                <option value="" >Type</option>
                {Object.keys(pokemonTypes).map((type) => (
                    // Option for each Pokemon type with background color and text color
                    <option
                        key={type}
                        value={type}
                        style={{ backgroundColor: pokemonTypes[type], color: 'white' }}
                    >
                        {type}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default PokemonTypeDropdown;

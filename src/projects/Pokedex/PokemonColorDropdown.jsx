import React, { useState } from 'react';
import axios from 'axios';

// Define a mapping of Pokemon types to their respective colors
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

// Define an array of available Pokemon colors
const pokemonColors = [
  "red", "blue", "yellow", "green", "black", "brown", "purple", "gray", "white", "pink"
];

function PokemonColorDropdown({ setColorBackground, setPokemonList, selectedType, setSelectedType }) {

  // Handle color change event
  const handleColorChange = async (event) => {
    const newSelectedColor = event.target.value;
    setColorBackground(newSelectedColor ? newSelectedColor : 'red');
    setSelectedType(''); // Clear the selected type when a color is selected.

    if (newSelectedColor || selectedType !== '') {
      try {
        // Make a request to the PokeAPI with the selected color
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-color/${newSelectedColor}`);
        const pokemonData = response.data.pokemon_species.map(item => item);

        // Set the new PokemonList using the extracted names
        setPokemonList(pokemonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else if (selectedType === '' || !newSelectedColor) {
      try {
        // If no color is selected, fetch the list of all Pokémon
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1025');

        // Set the new PokemonList to include all Pokémon
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  return (
    <div style={{ height: '30px' }}>
      <select style={{ height: '30px', width: '250px' }} onChange={handleColorChange} value={selectedType}>
        <option value="">Color</option>
        {pokemonColors.map((color, id) => (
          <option
            key={id}
            value={color}
            style={{ backgroundColor: color, color: 'white' }}
          >
            {color}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PokemonColorDropdown;

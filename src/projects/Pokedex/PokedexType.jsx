import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pokedex.css';
import { Container, Row, Col } from 'react-bootstrap';
import PokemonList from './PokemonList';
import PokedexContainer from './PokedexContainer';
import { useParams } from 'react-router-dom';
import DamageRelations from './DamageRelations';
import darkenColor from './DarkenColor'



function PokedexType() {
  const { id } = useParams();
  const [typeData, setTypeData] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const [showDetails, setShowDetails] = useState(false); // Define showDetails state
  const [selectedPokemon, setSelectedPokemon] = useState(null); // Define selectedPokemon state
  const [characteristicData, setCharacteristicData] = useState(null); // Define characteristicData state

  const pokemonTypes = {
    normal: "#A8A878",
    fighting: "#C03028",
    flying: "#A890F0",
    poison: "#A040A0",
    ground: "#E0C068",
    rock: "#B8A038",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B8B8D0",
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#F8D030",
    psychic: "#F85888",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#EE99AC",
  }

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/type/${id}`)
      .then((response) => {
        setTypeData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Pokémon list info:', error);
      });
  }, [id]);

  if (!typeData) {
    // If typeData is still null, return a loading message or spinner
    return <div>Loading...</div>;
  }

  let pokemonValues = typeData.pokemon.map(item => item.pokemon);
  let colorBackground = pokemonTypes[id];

  return (
    <PokedexContainer colorBackground={colorBackground}>
      <style>
        {`
          .damage-relations-container {
            background-color: ${darkenColor(colorBackground, 40)};
            padding: 20px;
            border: 2px solid #000;
            border-radius: 10px;
          }
  
          .damage-type {
            margin: 20px 0;
          }
  
          .damage-heading-container {
            background-color: ${darkenColor(colorBackground, 80)}; /* Fun background color */
            color: #fff; /* Text color */
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 10px;
            border: 1px solid #000;
          }
  
          .damage-type-container {
            background-color: ${darkenColor(colorBackground, 100)}; /* Fun background color */
            color: #fff; /* Text color */
            padding: 5px;
            border-radius: 5px;
            margin-bottom: 5px;
            border: 1px solid #000;
          }
  
          .damage-list {
            list-style-type: none;
            padding: 0;
          }
  
          .damage-item {
            background-color: ${darkenColor(colorBackground, 130)};
            color: #fff;
            padding: 5px 10px;
            margin: 5px;
            border-radius: 5px;
            display: inline-block;
            border: 1px solid #000;
          }
  
          .damage-item:hover {
            background-color: ${darkenColor(colorBackground, 160)};
            /* color: #000; */
            padding: 5px 10px;
            margin: 5px;
            border-radius: 5px;
            display: inline-block;
            border: 2px solid #000;
          }
          .type-title{
            border: 2px solid #000;
            background-color: ${darkenColor(colorBackground, 80)};
            color: #fff;
            margin: 10px auto;
            width: 50%;
            padding: 10px;
            align-items: center;
            justify-items: center;
            justify-content: center; /* Center horizontally */
            border-radius: 15px;
            

          }
        `}
      </style>
      <div className='type-title'>

  <div
    style={{
      paddingTop: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column', // To center vertically
    }}
  >
    <h1>Type: {typeData.name.toUpperCase()}</h1>
  </div>
      </div>
      <DamageRelations damage_relations={typeData.damage_relations} />
      <PokemonList list={pokemonValues} colorCardBackground={darkenColor(colorBackground, 80)} />
    </PokedexContainer>
  );
}

export default PokedexType;

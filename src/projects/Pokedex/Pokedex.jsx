import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pokedex.css';
import PokemonList from './PokemonList';
import PokedexContainer from './PokedexContainer';
import PokemonTypeDropdown from './PokemonTypeDropdown';
import PokemonColorDropdown from './PokemonColorDropdown';
import PokemonAbilitiesDropdown from './PokemonAbilitiesDropdown';
import PokemonSearchBar from './PokemonSearchBar'
import DamageRelations from './DamageRelations';
import './DamageRelations.css'
import PokemonHabitatsDropdown from './PokemonHabitatsDropdown';

function Pokedex() {
  let pokemonSprites = [];

  // Create an array of numbers from 1 to 151 for Pokemon sprites.
  for (let i = 1; i <= 151; i++) {
    pokemonSprites.push(i);
  }

  const [pokemonList, setPokemonList] = useState([]);
  const [colorBackground, setColorBackground] = useState("red");
  const [selectedType, setSelectedType] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedAbility, setSelectedAbility] = useState(null);
  const [damageRelationsData, setDamageRelationsData] = useState(null); // State to store filtered Pokemon
  const [selectedHabitat, setSelectedHabitat] = useState(null); // State to store filtered Pokemon

  // Fetch Pokemon data from the PokeAPI using Axios when the component mounts.
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1025')
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/ability/${selectedAbility}`)
      .then((response) => {
        setPokemonList(response.data.pokemon.map(entry => entry.pokemon))
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [selectedAbility]);

  useEffect(() => {
    if (selectedHabitat) {
      axios.get(`https://pokeapi.co/api/v2/pokemon-habitat/${selectedHabitat}`)
        .then((response) => {
          console.log("HERE")
          console.log(response.data)
          setPokemonList(response.data.pokemon_species)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });

    }
  }, [selectedHabitat]);





  return (
    <PokedexContainer colorBackground={colorBackground}>
      <style>
        {`
      .sorting-row {
        background-color: rgba(0, 0, 0, 0.1);
      }
          .damage-relations-container {
            background-color: rgba(0, 0, 0, 0.1);
          }
  
          .damage-heading-container {
            background-color: rgba(0, 0, 0, 0.1);
          }
  
          .damage-type-container {
            background-color: rgba(0, 0, 0, 0.1);
          }
  
          .damage-item {
            background-color: rgba(0, 0, 0, 0.1);
          }
  
          .damage-item:hover {
            background-color: rgba(0, 0, 0, 0.1);
          }
          .type-title{
            background-color: rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
      <div className='sorting-row row' style={{ colorBackground: 'transparent' }}>
        <div className='col-md-3' style={{ colorBackground: 'transparent' }}>
          {/* Render PokemonColorDropdown component */}
          <PokemonColorDropdown
            setSelectedType={setSelectedType}
            setColorBackground={setColorBackground}
            setPokemonList={setPokemonList}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>
        <div className='col-md-3' style={{ colorBackground: 'transparent' }}>
          {/* Render PokemonTypeDropdown component */}
          <PokemonTypeDropdown
            setSelectedColor={setSelectedColor}
            setColorBackground={setColorBackground}
            setPokemonList={setPokemonList}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            setDamageRelationsData={setDamageRelationsData}
          />
        </div>
        <div className='col-md-3' style={{ colorBackground: 'transparent' }}>
          <PokemonAbilitiesDropdown
            setSelectedAbility={setSelectedAbility}
            selectedAbility={selectedAbility}
            setSelectedColor={setSelectedColor}
            setColorBackground={setColorBackground}
            setPokemonList={setPokemonList}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            setDamageRelationsData={setDamageRelationsData}
          />
        </div>
        <div className='col-md-3'>
          <PokemonHabitatsDropdown
            setSelectedColor={setSelectedColor}
            setColorBackground={setColorBackground}
            setSelectedType={setColorBackground}
            setDamageRelationsData={setDamageRelationsData}
            selectedAbility={selectedAbility}
            setSelectedAbility={setSelectedAbility}
            setSelectedHabitat={setSelectedHabitat}
            selectedHabitat={selectedHabitat} />

        </div>


          <PokemonSearchBar setPokemonList={setPokemonList} pokemonList={pokemonList} />
 
      </div>
      {damageRelationsData && selectedType && <DamageRelations damage_relations={damageRelationsData} />}
      {/* Render PokemonList component with props */}
      <PokemonList
        list={pokemonList}
        setSelectedType={setSelectedType}
        setColorBackground={setColorBackground}
        colorCardBackground={colorBackground}
        colorBackground={colorBackground}
        selectedAbility={selectedAbility}

      />
    </PokedexContainer >
  );
}

export default Pokedex;

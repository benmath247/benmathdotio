import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import LocationAreaEncounters from './LocationAreaEncounters';
import PokedexContainer from './PokedexContainer';
import PokemonMovesList from './PokemonMovesList';
import SpriteDisplay from './RotatingSprite';
import PokemonStats from './PokemonStats';
import SpeciesData from './SpeciesData';
import SpeciesDescription from './SpeciesDescription';

const PokemonDetailsPage = () => {
  // Get the 'id' parameter from the URL using useParams
  const { id } = useParams();

  // Define state variables for data fetching and storage
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonColor, setPokemonColor] = useState(null);
  const [encounterData, setEncounterData] = useState(null);
  const [speciesData, setSpeciesData] = useState(null);

  // CSS style for rounded table
  const roundedTable = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '10px',
  };

  // useEffect for fetching Pokemon data
  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        // Fetch Pokemon data from the PokeAPI using axios
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemonData(response.data);

        // Fetch location area encounter data
        const locationAreaResponse = await axios.get(response.data.location_area_encounters);
        setEncounterData(locationAreaResponse.data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    // Call the fetchPokemonData function when 'id' changes
    fetchPokemonData();
  }, [id]);

  // useEffect for fetching Pokemon color and species data
  useEffect(() => {
    const fetchPokemonColorData = async () => {
      try {
        if (pokemonData) {
          // Fetch color data from the species URL
          const colorResponse = await axios.get(pokemonData.species.url);
          setPokemonColor(colorResponse.data.color.name);

          // Fetch species data and set it to state
          const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}`);
          setSpeciesData(speciesResponse.data);
        }
      } catch (error) {
        console.error('Error fetching Pokemon color/species data:', error);
      }
    };

    // Call the fetchPokemonColorData function when 'pokemonData' changes
    fetchPokemonColorData();
  }, [pokemonData]);

  // Function to render Pokemon details
  const renderPokemonDetails = () => {
    return (
      <div className='pokemon-details-page'>
        <div className='container'>
          <div className="row">
            <div className="col-md-3">
              <img
                style={{ height: '300px' }}
                src={pokemonData.sprites.other['official-artwork'].front_default}
                alt={`${pokemonData.name} Official Artwork`}
              />
            </div>
            <div
              // style={{ padding: '100px' }} 
              id='pokemon-name-header'
              className="col-md-9 d-flex flex-column justify-content-end">
              <h2
              // style={{ fontSize: '70px' }}
              >{pokemonData.name.toUpperCase()}</h2>
            </div>
          </div>
        </div>
        {speciesData && <SpeciesDescription speciesData={speciesData} />}
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <table className="pokemon-details-table">
                <thead>
                  <tr>
                    <th colSpan="2">TYPES</th>
                    <th>COLOR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2">
                      {pokemonData.types.map((type, index) => (
                        <React.Fragment key={type.type.name}>
                          <Link to={`/pokedex/type/${type.type.name}`}>
                            {type.type.name}
                          </Link>
                          {index < pokemonData.types.length - 1 && ', '}
                        </React.Fragment>
                      ))}
                    </td>
                    <td>{pokemonColor}</td>
                  </tr>
                </tbody>
              </table>
              <table className="pokemon-details-table">
                <thead>
                  <tr>
                    <th colSpan="2">FORMS:</th>
                  </tr>
                </thead>
                <tbody>
                  {pokemonData.forms.map((form, index) => (
                    <tr key={index}>
                      <td>{form.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <table className="pokemon-details-table" style={roundedTable}>
                <thead>
                  <tr>
                    <th colSpan="2">ABILITIES:</th>
                  </tr>
                </thead>
                <tbody>
                  {pokemonData.abilities.map((ability, index) => (
                    <tr key={index}>
                      <td>{ability.ability.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-3">
              <div className="sprite-frame" style={{ height: '340px' }}>
                <SpriteDisplay id={id} hovered={true} />
              </div>
            </div>
          </div>
        </div>
        {speciesData && <SpeciesData speciesData={speciesData} />}
        <div className='row'>
          <div className='col'>
            <PokemonMovesList moves={pokemonData.moves} />
          </div>
          <div className='col'>
            <PokemonStats pokemonData={pokemonData} />
          </div>
        </div>
        {encounterData ? (
          <LocationAreaEncounters encounterData={encounterData} />
        ) : (
          <p>Loading location area encounters...</p>
        )}
      </div>
    );
  };

  return (
    <PokedexContainer colorBackground={pokemonColor}>
      {pokemonData ? renderPokemonDetails() : <p>Loading...</p>}
    </PokedexContainer>
  );
};

export default PokemonDetailsPage;

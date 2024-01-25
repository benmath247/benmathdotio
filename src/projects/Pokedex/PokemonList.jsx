import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PokemonCard from './PokemonCard';

// This function extracts the numeric ID from a Pokemon's URL.
function extractNumber(url) {
  const parts = url.split('/');
  const lastPart = parts[parts.length - 2];
  return parseInt(lastPart);
}

// The PokemonList component takes a list of Pokemon, setSelectedType function, and colorCardBackground as props.
function PokemonList({ list, setSelectedType, colorCardBackground }) {
  return (
    <Row>
      {list.map((pokemon, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3}>
          {/* Each PokemonCard component is rendered with its properties. */}
          <PokemonCard
            colorCardBackground={colorCardBackground}
            setSelectedType={setSelectedType}
            // Capitalize the first letter of the Pokemon's name.
            name={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            // Pass the extracted ID from the URL as the 'id' prop.
            id={extractNumber(pokemon.url)}
          />
        </Col>
      ))}
    </Row>
  );
}

export default PokemonList;

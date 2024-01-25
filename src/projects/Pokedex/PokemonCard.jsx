import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SpriteDisplay from './RotatingSprite';
import darkenColor from './DarkenColor';
import calculateInverseColor from './inverseColor';

const PokemonCard = ({ name, id, colorCardBackground }) => {
    const [hovered, setHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
  
    return (
      <Link to={`/pokedex/pokemon/${id}`}>
        <Card
          className={`pokemon-image-display grow-on-hover ${hovered ? 'hovered' : ''}`}
          style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SpriteDisplay colorCardBackground={colorCardBackground} id={id} hovered={hovered} growOnHover={true}/>
          <Card.Body>
            <Card.Title style={{backgroundColor: "rgba(0, 0, 0, 0.3)", color: calculateInverseColor(colorCardBackground)}} className='pokemon-name-list-display'>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    );
  };

  export default PokemonCard
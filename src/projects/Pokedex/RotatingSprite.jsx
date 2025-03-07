import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

const SpriteDisplay = ({ id, grayscale, hovered, growOnHover }) => {
  const [spriteIndex, setSpriteIndex] = useState(0);
  const sprites = [
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`,
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`,
  ];

  useEffect(() => {
    let interval;
    debugger
    if (hovered) {
      interval = setInterval(() => {
        setSpriteIndex((prevIndex) => (prevIndex + 1) % sprites.length);
      }, 500); // 1 second interval for slower sprite change
    } else {
      setSpriteIndex(0);
    }

    return () => clearInterval(interval);
  }, [hovered, sprites.length]);

  return (
    <Card.Img
      className={`${growOnHover ? 'grow-on-hover-high' : ''} ${grayscale ? 'grayscale' : ''}`}
      src={sprites[spriteIndex]}
      alt={`Pokemon Sprite ${id}`}
    />
  );
};

export default SpriteDisplay;

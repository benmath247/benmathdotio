import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';

function PokemonHabitatsDropdown({
    setSelectedColor,
    setColorBackground,
    setSelectedType,
    setDamageRelationsData,
    selectedAbility,
    setSelectedAbility,
    setSelectedHabitat,
    selectedHabitat
}) {
    const habitatColors = {
        "cave": "#5D4037",
        "forest": "#4CAF50",
        "grassland": "#8BC34A",
        "mountain": "#607D8B",
        "rare": "#FF5722",
        "rough-terrain": "#9E9E9E",
        "sea": "#03A9F4",
        "urban": "#FF9800",
        "waters-edge": "#03A9F4"
    };

    const habitatNames = [
        "cave",
        "forest",
        "grassland",
        "mountain",
        "rare",
        "rough-terrain",
        "sea",
        "urban",
        "waters-edge"
    ];

    const handleHabitatChange = (event) => {
        const newSelectedHabitat = event.target.value;
        setSelectedColor(null)
        // setPokemonList={setPokemonList}
        setSelectedAbility(null)
        setSelectedType(null)
        setDamageRelationsData(null)
        setSelectedHabitat(newSelectedHabitat)
        setColorBackground(newSelectedHabitat ? habitatColors[newSelectedHabitat] : 'red')
    };

    return (
        <div style={{ height: '30px' }}>
            <select style={{ height: '30px', width: '100%' }} onChange={handleHabitatChange} value={selectedHabitat}>
                <option value="">Habitats</option>
                {habitatNames.map((habitat) => (
                    <option key={habitat} value={habitat}>
                        {habitat}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default PokemonHabitatsDropdown;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';

function PokemonAbilitiesDropdown({
    setSelectedColor,
    setColorBackground,
    setSelectedType,
    setDamageRelationsData,
    selectedAbility,
    setSelectedAbility
}) {
    const abilityNames = [
        "stench",
        "drizzle",
        "speed-boost",
        "battle-armor",
        "sturdy",
        "damp",
        "limber",
        "sand-veil",
        "static",
        "volt-absorb",
        "water-absorb",
        "oblivious",
        "cloud-nine",
        "compound-eyes",
        "insomnia",
        "color-change",
        "immunity",
        "flash-fire",
        "shield-dust",
        "own-tempo"
    ];
    const abilityColors = {
        "stench": "#A040A0",         // Purple
        "drizzle": "#03A9F4",        // Blue
        "speed-boost": "#FFA726",    // Orange
        "battle-armor": "#78909C",   // Gray
        "sturdy": "#795548",         // Brown
        "damp": "#00BCD4",           // Cyan
        "limber": "#FFC107",         // Yellow
        "sand-veil": "#D84315",      // Red
        "static": "#FF5722",         // Deep Orange
        "volt-absorb": "#009688",    // Teal
        "water-absorb": "#03A9F4",   // Blue
        "oblivious": "#607D8B",      // Blue Gray
        "cloud-nine": "#F44336",     // Red
        "compound-eyes": "#8BC34A",  // Green
        "insomnia": "#9C27B0",       // Purple
        "color-change": "#FF5722",   // Deep Orange
        "immunity": "#8BC34A",       // Green
        "flash-fire": "#FF9800",     // Amber
        "shield-dust": "#78909C",    // Gray
        "own-tempo": "#607D8B"       // Blue Gray
    };

    const handleAbilityChange = (event) => {
        const newSelectedAbility = event.target.value;
        setSelectedColor(null)
        // setPokemonList={setPokemonList}
        setSelectedType(null)
        setDamageRelationsData(null)
        setSelectedAbility(newSelectedAbility);
        setColorBackground(newSelectedAbility ? abilityColors[newSelectedAbility] : 'red')
    };

    return (
        <div>
            <select style={{ height: '30px', width: '100%' }} onChange={handleAbilityChange} value={selectedAbility}>
                <option value="">Abilities</option>
                {abilityNames.map((ability) => (
                    <option key={ability} value={ability}>
                        {ability}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default PokemonAbilitiesDropdown;

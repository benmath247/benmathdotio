import React from 'react';

const PokemonStats = ({ pokemonData }) => {
  return (
    <div className="pokemon-stats">
      <h2>Stats</h2>
      {/* Apply the custom pokemon-details-table class */}
      <table className="pokemon-details-table">
        <thead>
          <tr>
            <th>Stat</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Base Experience</td>
            <td>{pokemonData.base_experience}</td>
          </tr>
          <tr>
            <td>Height (meters)</td>
            <td>{pokemonData.height / 10}</td>
          </tr>
          <tr>
            <td>Weight (kilograms)</td>
            <td>{pokemonData.weight / 10}</td>
          </tr>
          {pokemonData.stats.map((stat, index) => (
            <tr key={index}>
              <td className='grow-on-hover'>{stat.stat.name}</td>
              <td>{stat.base_stat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonStats;

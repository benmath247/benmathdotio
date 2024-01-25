import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SpeciesData({ speciesData }) {
  return (
    <div className="container">
      {speciesData.is_legendary && <p>This Pokemon is legendary</p>}
      {speciesData.is_mythical && <p>This Pokemon is mythical</p>}
      {speciesData.is_baby && <p>This Pokemon is a baby</p>}
      {/* Apply the custom pokemon-details-table class */}
      <h3>SPECIES DATA</h3>
      <table className="pokemon-details-table">
        <tbody>
          {speciesData.habitat && (
            <tr>
              <td>Habitat</td>
              <td>{speciesData.habitat.name}</td>
            </tr>
          )}
          {speciesData.shape && (
            <tr>
              <td>Shape</td>
              <td>{speciesData.shape.name}</td>
            </tr>
          )}
          {speciesData.base_happiness && (
            <tr>
              <td>Base Happiness</td>
              <td>{speciesData.base_happiness}</td>
            </tr>
          )}
          {speciesData.capture_rate && (
            <tr>
              <td>Capture Rate</td>
              <td>{speciesData.capture_rate}</td>
            </tr>
          )}
          {speciesData.growth_rate && (
            <tr>
              <td>Growth Rate</td>
              <td>{speciesData.growth_rate.name}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SpeciesData;
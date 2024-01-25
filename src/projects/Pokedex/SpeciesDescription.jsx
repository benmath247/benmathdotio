import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SpeciesDescription({ speciesData }) {
  console.log(speciesData.flavor_text_entries[0].language.name == 'en')
  return (
    <div className="species-description">
{speciesData.flavor_text_entries && speciesData.flavor_text_entries[0] && (
          <p>{
          speciesData.flavor_text_entries[0].language.name == 'en' ? speciesData.flavor_text_entries[0].flavor_text : speciesData.flavor_text_entries[1].flavor_text} </p>

      )}
    </div>
  );
}

export default SpeciesDescription;

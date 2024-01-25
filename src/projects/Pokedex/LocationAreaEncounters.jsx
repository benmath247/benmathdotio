import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LocationAreaEncounters = ({ encounterData }) => {
  // Define state variable 'expandedLocations' to keep track of expanded card indices
  const [expandedLocations, setExpandedLocations] = useState([]);

  // Function to toggle the expansion of a location card
  const toggleLocation = (index) => {
    if (expandedLocations.includes(index)) {
      // If the location card is expanded, remove it from 'expandedLocations'
      setExpandedLocations(expandedLocations.filter((i) => i !== index));
    } else {
      // If the location card is not expanded, add it to 'expandedLocations'
      setExpandedLocations([...expandedLocations, index]);
    }
  };

  return (
    // Render the component only if 'encounterData' has data
    encounterData.length > 0 && (
      <div className="container">
        <h2>Location Area Encounters</h2>
        <div className="scrollbox" style={{ maxHeight: '400px', overflow: 'auto' }}>
          {encounterData.map((locationArea, index) => (
            <div className="card mb-3" key={index}>
              <div className="card-header">
                <button
                  className="btn btn-link"
                  onClick={() => toggleLocation(index)}
                >
                  Location: {locationArea.location_area.name || 'Unknown'}
                </button>
              </div>
              {expandedLocations.includes(index) && (
                <div className="card-body">
                  <table className="table table-striped table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Version</th>
                        <th>Method</th>
                        <th>Level Range</th>
                        <th>Chance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {locationArea.version_details?.map((versionDetail, versionIndex) => (
                        <tr key={versionIndex}>
                          <td>{versionDetail.version?.name || 'Unknown'}</td>
                          <td>{versionDetail.encounter_details[0]?.method?.name || 'Unknown'}</td>
                          <td>{`${versionDetail.encounter_details[0]?.min_level || 'N/A'} - ${versionDetail.encounter_details[0]?.max_level || 'N/A'}`}</td>
                          <td>{versionDetail.encounter_details[0]?.chance ? `${versionDetail.encounter_details[0].chance}%` : 'N/A'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default LocationAreaEncounters;

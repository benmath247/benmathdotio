import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tab, Button } from 'react-bootstrap';

function CharacteristicsTab({ selectedPokemon }) {
  const [characteristicData, setCharacteristicData] = useState(null);

  useEffect(() => {
    if (selectedPokemon) {
      fetchCharacteristicData(selectedPokemon.id);
    }
  }, [selectedPokemon]);

  const fetchCharacteristicData = async (id) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/characteristic/${id}/`);
      setCharacteristicData(response.data);
    } catch (error) {
      console.error('Error fetching characteristic data:', error);
    }
  };

  return (
    <Tab.Pane eventKey="characteristics">
      
        <div>
          <strong>ID:</strong> {characteristicData.id}<br />
          <strong>Gene Modulo:</strong> {characteristicData.gene_modulo}<br />
          <strong>Highest Stat:</strong> {characteristicData.highest_stat.name}<br />
          <strong>Possible Values:</strong> {characteristicData.possible_values.join(', ')}<br />
          <strong>Description:</strong> {characteristicData.descriptions[0]?.description}<br />
        </div>
      
      <Button
        variant="primary"
        onClick={() => fetchCharacteristicData(selectedPokemon.id)}
      >
        Fetch Characteristic
      </Button>
    </Tab.Pane>
  );
}

export default CharacteristicsTab;

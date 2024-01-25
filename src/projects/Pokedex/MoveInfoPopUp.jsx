import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios'; // Import Axios for HTTP requests

const PokemonInfoPopup = ({ show, onHide, data }) => {
  const { name, url, version_group_details } = data.move;
  const [moveInfo, setMoveInfo] = useState(null);
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const [effectIndex, setEffectIndex] = useState(0);

  useEffect(() => {
    // Function to fetch move info from the URL
    const fetchMoveInfo = async () => {
      try {
        const response = await axios.get(url); // Make an HTTP GET request
        setMoveInfo(response.data); // Set the move info in the state
        setDescriptionIndex(0); // Reset the description index to the first item
        setEffectIndex(0); // Reset the effect index to the first item
      } catch (error) {
        console.error('Error fetching move info:', error);
      }
    };

    if (show) {
      fetchMoveInfo(); // Fetch move info when the modal is shown
    }
  }, [show, url]);

  const handleNextDescriptionClick = () => {
    if (moveInfo && descriptionIndex < moveInfo.flavor_text_entries.length - 1) {
      setDescriptionIndex(descriptionIndex + 1);
    }
  };

  const handlePrevDescriptionClick = () => {
    if (moveInfo && descriptionIndex > 0) {
      setDescriptionIndex(descriptionIndex - 1);
    }
  };

  return (
    <Modal show={show} onHide={onHide} className="pokemon-modal">
      <Modal.Header closeButton>
        <Modal.Title className="pokemon-title">{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {moveInfo && (
          <div className="scrollbox" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <h3 className="pokemon-description"><div
                className="arrow left-arrow"
                onClick={handlePrevDescriptionClick}
                >
                &#8592; {/* Left arrow */}
              </div>Description<div
                className="arrow right-arrow"
                onClick={handleNextDescriptionClick}
                >
                &#8594; {/* Right arrow */}
              </div></h3>
                <p><small>Toggle arrow buttons to see more descriptions</small></p>
            <div className="pokemon-text">
              
              <p className="flavor-text">
                {moveInfo.flavor_text_entries[descriptionIndex].flavor_text}
              </p>
            </div>
            <h3 className="pokemon-effect">Effect</h3>
            <div className="pokemon-text">
              <p className="effect-text">
                {moveInfo.effect_entries[0].effect}
              </p>
            </div>
            {/* Display the move attributes as a table with full width */}
            <h3 className="pokemon-attributes">Move Attributes</h3>
            <div className="pokemon-table-container">
              <table className="pokemon-table" style={{width: '100%'}}>
                <tbody>
                  {moveInfo.power && (
                    <tr>
                      <td>Power:</td>
                      <td>{moveInfo.power}</td>
                    </tr>
                  )}
                  {moveInfo.accuracy && (
                    <tr>
                      <td>Accuracy:</td>
                      <td>{moveInfo.accuracy}</td>
                    </tr>
                  )}
                  {moveInfo.pp && (
                    <tr>
                      <td>PP (Power Points):</td>
                      <td>{moveInfo.pp}</td>
                    </tr>
                  )}
                  {moveInfo.effect_chance && (
                    <tr>
                      <td>Effect Chance:</td>
                      <td>{moveInfo.effect_chance}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide} className="pokemon-button">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PokemonInfoPopup;

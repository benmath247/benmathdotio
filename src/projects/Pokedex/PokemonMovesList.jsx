import React, { useState } from 'react';
import PokemonInfoPopup from './MoveInfoPopUp';

const PokemonMovesList = ({ moves }) => {
  const [selectedMove, setSelectedMove] = useState(null); // State to track the selected move

  const openMoveInfo = (move) => {
    setSelectedMove(move); // Set the selected move when clicked
  };

  const closeMoveInfo = () => {
    setSelectedMove(null); // Clear the selected move when closing the popup
  };

  return (
    <div className='moves-container'>
      <h2>Moves</h2>
      <div className='scrollbox' style={{ maxHeight: '500px', overflowY: 'auto' }}>
        <table className="pokemon-details-table">
          <tbody>
            {moves.map((move, index) => (
              <tr key={index}>
                <td>
                  <div
                    className="move-link"
                    onClick={() => {
                      openMoveInfo(move); // Open move info when clicked
                    }}
                  >
                    {move.move.name || 'Unknown'}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Display move info popup when a move is selected */}
      {selectedMove && (
        <PokemonInfoPopup
          show={true}
          onHide={closeMoveInfo}
          data={selectedMove}
        />
      )}
    </div>
  );
};

export default PokemonMovesList;

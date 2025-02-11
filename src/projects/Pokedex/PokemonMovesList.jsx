import React, { useState } from 'react';
import PokemonInfoPopup from './MoveInfoPopUp';

const PokemonMovesList = ({ moves }) => {
  const [selectedMove, setSelectedMove] = useState(null);

  const openMoveInfo = (move) => {
    setSelectedMove(move);
  };

  const closeMoveInfo = () => {
    setSelectedMove(null);
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
                      openMoveInfo(move);
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

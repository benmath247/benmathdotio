import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MemoryGame = () => {
  // State to manage the cards and their symbols
  const [cards, setCards] = useState([]);
  // State to keep track of flipped card indices
  const [flippedIndices, setFlippedIndices] = useState([]);
  // State to store matched pairs of cards
  const [matchedPairs, setMatchedPairs] = useState([]);
  // State to count the number of moves
  const [moves, setMoves] = useState(0);

  // Initialize the cards with symbols in a randomized order
  useEffect(() => {
    const symbols = ['🌟', '🎈', '🎉', '🎁', '🍰', '🍭', '🍦', '🍬'];
    const initialCards = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
    setCards(initialCards);
  }, []);

  // State to store the elapsed time in seconds
  const [elapsedTime, setElapsedTime] = useState(0);

  // State to manage the game's timer interval
  const [timerInterval, setTimerInterval] = useState(null);

  // Function to start the timer
  const startTimer = () => {
    setTimerInterval(setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 0.5);
    }, 1000));
  };

  // Function to stop the timer
  const stopTimer = () => {
    clearInterval(timerInterval);
  };

  // Function to reset the timer
  const resetTimer = () => {
    clearInterval(timerInterval);
    setElapsedTime(0);
  };

  // Effect to start the timer when the game starts
  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, []);

  // Function to format the elapsed time as "MM:SS"
  const formatTime = () => {
    const minutes = Math.floor(elapsedTime / 60).toString().padStart(2, '0');
    const seconds = (elapsedTime % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  // Display the timer in the UI
  const renderTimer = () => {
    return (
      <div className="text-center mt-3">
        <h2>Time: {formatTime()}</h2>
      </div>
    );
  };

  // Function to handle card click
  const handleCardClick = (index) => {
    if (flippedIndices.length === 2) {
      return;
    }

    if (!flippedIndices.includes(index)) {
      // Flip the clicked card
      const newFlippedIndices = [...flippedIndices, index];
      setFlippedIndices(newFlippedIndices);

      if (newFlippedIndices.length === 2) {
        // Check if the two flipped cards match
        const [firstIndex, secondIndex] = newFlippedIndices;
        if (cards[firstIndex] === cards[secondIndex]) {
          // If they match, add the symbol to the matchedPairs state
          setMatchedPairs([...matchedPairs, cards[firstIndex]]);
        }

        // Reset the flippedIndices and increment the moves after a delay
        setTimeout(() => {
          setFlippedIndices([]);
          setMoves(moves + 1);
        }, 1000);
      }
    }
  };

  // Check if the player has won the game
  const checkWin = () => {
    return matchedPairs.length === cards.length / 2;
  };

  // Display the "You Win!" message when the player wins
  const renderWinMessage = () => {
    if (checkWin()) {
      return (
        <div className="text-center mt-3">
          <h2 className="text-success">You Win!</h2>
        </div>
      );
    }
    return null;
  };

  // Function to shuffle the cards
  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setMoves(moves + 1); // Increase the move count on shuffle
  };

  // Display the "Shuffle" button
  const renderShuffleButton = () => {
    return (
      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={shuffleCards}>
          Shuffle Cards
        </button>
      </div>
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Memory Game</h1>
      <p className="text-center mb-4">
        The goal of the Memory Game is to match all pairs of cards as quickly as possible while keeping the number of moves (flips) to a minimum. It's a classic memory and pattern recognition game that challenges players to remember the positions of the symbols on the cards and match them efficiently.
      </p>
      <div className="row">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`col-3 mb-3 ${flippedIndices.includes(index) || matchedPairs.includes(card) ? 'disabled' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className={`card ${flippedIndices.includes(index) || matchedPairs.includes(card) ? 'flipped' : ''}`}>
              <div className="card-body text-center">
                <h3>{flippedIndices.includes(index) || matchedPairs.includes(card) ? card : '?'}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-3">Moves: {moves}</p>
      {renderTimer()}
      {renderShuffleButton()}
      {renderWinMessage()}
    </div>
  );
};

export default MemoryGame;

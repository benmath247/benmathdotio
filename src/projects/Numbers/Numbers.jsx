import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NumberGuessingGame = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const [guess, setGuess] = useState(generateRandomNumber(minNumber, maxNumber));
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 1 and 100');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
  };

  const handleGuess = () => {
    const parsedUserGuess = parseInt(userGuess);

    if (isNaN(parsedUserGuess) || parsedUserGuess < minNumber || parsedUserGuess > maxNumber) {
      setMessage('Please enter a valid number between 1 and 100.');
      return;
    }

    setAttempts(attempts + 1);

    if (parsedUserGuess === guess) {
      setMessage(`Congratulations! You guessed the number ${guess} correctly in ${attempts} attempts.`);
      setGameOver(true);
    } else if (parsedUserGuess < guess) {
      setMessage(`Try a higher number.`);
    } else {
      setMessage(`Try a lower number.`);
    }
  };

  const handlePlayAgain = () => {
    const newGuess = generateRandomNumber(minNumber, maxNumber);
    setGuess(newGuess);
    setUserGuess('');
    setMessage('Guess a number between 1 and 100');
    setAttempts(0);
    setGameOver(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Number Guessing Game</h1>
      <p className="text-center">{message}</p>
      <div className="text-center">
        {!gameOver && (
          <>
            <input
              type="number"
              value={userGuess}
              onChange={handleInputChange}
              placeholder="Enter your guess"
              className="mr-2"
            />
            <button className="btn btn-primary" onClick={handleGuess}>
              Guess
            </button>
          </>
        )}
        {gameOver && (
          <button className="btn btn-success" onClick={handlePlayAgain}>
            Play Again
          </button>
        )}
      </div>
      <div className='text-center'>

        <Link to="/portfolio">
          <button className="btn btn-primary">
            Back to Portfolio
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NumberGuessingGame;

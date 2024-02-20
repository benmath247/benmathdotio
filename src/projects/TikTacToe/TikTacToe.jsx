import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TikTacToe.css';
import { Link } from 'react-router-dom';

function TikTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [xPlayerName, setXPlayerName] = useState('X');
  const [oPlayerName, setOPlayerName] = useState('O');
  const [fireworks, setFireworks] = useState([]);
  const [winnerName, setWinnerName] = useState('');
  const [isGameWon, setIsGameWon] = useState(false);

  const current = history[stepNumber];
  const winner = calculateWinner(current);

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const currentBoard = newHistory[newHistory.length - 1].slice();

    if (winner || currentBoard[i]) return;

    currentBoard[i] = xIsNext ? 'X' : 'O';
    setHistory(newHistory.concat([currentBoard]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);

    const updatedWinner = calculateWinner(currentBoard);
    if (updatedWinner) {
      if (updatedWinner === 'X') {
        setXScore(xScore + 1);
        setWinnerName(xPlayerName); // Set the winner's name
      } else if (updatedWinner === 'O') {
        setOScore(oScore + 1);
        setWinnerName(oPlayerName); // Set the winner's name
      }
      triggerFireworks(i);
      setIsGameWon(true); // Game is won
    } else {
      setIsGameWon(false); // Game is not won
    }
  };

  const getRandomColor = () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff9900', '#ff00ff'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const triggerFireworks = (i) => {
    const burstElements = [];
    for (let j = 0; j < 100; j++) {
      const burstElement = (
        <>
          <div
            key={j}
            className="firework-burst"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `5s`,
              backgroundColor: getRandomColor(),
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          ></div>
          <div
            key={j}
            className="firework-burst2"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `5s`,
              backgroundColor: getRandomColor(),
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          ></div>
          <div
            key={j}
            className="firework-burst3"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `5s`,
              backgroundColor: getRandomColor(),
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          ></div>
          <div
            key={j}
            className="firework-burst4"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `5s`,
              backgroundColor: getRandomColor(),
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          ></div>
        </>
      );
      burstElements.push(burstElement);
    }

    setFireworks(burstElements);

    setTimeout(() => {
      setFireworks([]);
    }, 5000);
  };

  const renderSquare = (i) => {
    const buttonValue = current[i];
    let buttonClass = "btn square";
    let buttonTextClass = "text-dark";

    if (buttonValue === 'X') {
      buttonClass += " btn-primary";
      buttonTextClass = "text-white";
    } else if (buttonValue === 'O') {
      buttonClass += " btn-light";
    }

    return (
      <button className={buttonClass} onClick={() => handleClick(i)}>
        <span className={buttonTextClass}>{buttonValue}</span>
      </button>
    );
  };

  const getStatus = () => {
    if (isGameWon) {
      return (
        <div className="alert alert-success">
          <div id="fireworks" className="fireworks">
            {fireworks}
          </div>
          Winner: {winnerName}
        </div>
      );
    } else if (current.every((square) => square)) {
      return <div className="alert alert-warning">It's a draw!</div>;
    } else {
      return (
        <div className="alert alert-info">
          Next player: {xIsNext ? xPlayerName : oPlayerName}
        </div>
      );
    }
  };

  const resetGame = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
    setWinnerName(''); // Reset the winner's name
    setIsGameWon(false); // Reset the game won status
  };

  return (
    <div className="container" style={{ marginTop: '100px' }}>
      <div className="game">
        <div className="game-header">
          <h1>Tic-Tac-Toe</h1>
          <div className="form-group">
            <label htmlFor="xPlayerName">X Player Name:</label>
            <input
              type="text"
              id="xPlayerName"
              className="form-control"
              value={xPlayerName}
              onChange={(e) => setXPlayerName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="oPlayerName">O Player Name:</label>
            <input
              type="text"
              id="oPlayerName"
              className="form-control"
              value={oPlayerName}
              onChange={(e) => setOPlayerName(e.target.value)}
            />
          </div>
        </div>
        <div className="game-board">
          <div className="status">{getStatus()}</div>
          <div className='board'>
            <div className="board-row">
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className="board-row">
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className="board-row">
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
          </div>
        </div>
        <div className="score-board">
          <h4>Score</h4>
          <div className="row">
            <div className="col">
              <p>{xPlayerName}: {xScore}</p>
            </div>
            <div className="col">
              <p>{oPlayerName}: {oScore}</p>
            </div>
          </div>
        </div>
        <button className="btn btn-danger" onClick={resetGame}>Play Again</button>
        <br />
        <div className='container'>
          <Link to="/portfolio">
            <button className="btn btn-primary">
              Back to Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TikTacToe;

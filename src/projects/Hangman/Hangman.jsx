import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

const words = [
  "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise",
  "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata",
  "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran♀",
  "nidorina", "nidoqueen", "nidoran♂", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales",
  "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat",
  "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe",
  "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp",
  "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta",
  "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetch'd", "doduo", "dodrio", "seel", "dewgong",
  "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby",
  "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan",
  "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra",
  "goldeen", "seaking", "staryu", "starmie", "mr. mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir",
  "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon",
  "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini",
  "dragonair", "dragonite", "mewtwo", "mew"
];

function HangmanGame() {
  const [word, setWord] = useState('');
  const [guessedWord, setGuessedWord] = useState([]);
  const [guess, setGuess] = useState('');
  const [mistakesCount, setMistakesCount] = useState(0);
  const [maxMistakes, setMaxMistakes] = useState(7);
  const [usedLetters, setUsedLetters] = useState([]);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setGuessedWord(new Array(randomWord.length).fill('_ '));
  }, []);

  useEffect(() => {
    if (guess !== '' && guess.length === 1 && !usedLetters.includes(guess.toLowerCase())) {
      handleGuessSubmit();
    }
  }, [guess]);

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = () => {
    const guessLowerCase = guess.toLowerCase();
    if (!usedLetters.includes(guessLowerCase)) {
      const newGuessedWord = guessedWord.slice();
      let found = false;

      for (let i = 0; i < word.length; i++) {
        if (word[i] === guessLowerCase) {
          newGuessedWord[i] = guessLowerCase;
          found = true;
        }
      }

      if (!found) {
        setMistakesCount(mistakesCount + 1);
      }

      setGuessedWord(newGuessedWord);
      setGuess('');
      setUsedLetters([...usedLetters, guessLowerCase]);
    }
  };

  const isGameWon = guessedWord.join('') === word;
  const isGameLost = mistakesCount >= maxMistakes;

  const renderWord = () => {
    return (
      <div className="hangman-word">
        {guessedWord.map((letter, index) => (
          <span key={index} className="hangman-letter">
            {letter}
          </span>
        ))}
      </div>
    );
  };

  const renderUsedLetters = () => {
    return (
      <div className="used-letters">
        <p>Used Letters: {usedLetters.join(', ')}</p>
      </div>
    );
  };

  const fetchPokemonData = async (pokemonName) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      setPokemonData(response.data);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  if (word) {
    fetchPokemonData(word.toLowerCase());
  }

  return (
    <div className="container mt-5">
      <h1>Pokemon Hangman Game</h1>
      {mistakesCount != maxMistakes && <p>Try to guess the Pokemon by entering a letter at a time. <strong>You have {maxMistakes - mistakesCount} attempts left.</strong></p>}
      <h2>{isGameWon || isGameLost ? `It's ${word.charAt(0).toUpperCase() + word.slice(1)}!` : "Who's that Pokemon?!"}</h2>
      {isGameLost && <p className="text-danger">You lost! :(</p>}
      {isGameWon && <p className="text-success">Congratulations! You won!</p>}
      <>
        <Row>
          <Col>
            {pokemonData &&
              <div className="card mb-4 position-relative">
                <img
                  src={pokemonData.sprites['front_shiny']}
                  className={`card-img-top ${!isGameWon && !isGameLost ? 'grayscale' : ''}`}
                  alt={word}
                  style={!isGameWon && !isGameLost ? { filter: 'brightness(0)' } : {}}
                />
                <div className="card-body">
                  {/* <h5 className="card-title">{word.charAt(0).toUpperCase() + word.slice(1)}</h5> */}
                  <p className="card-text">Height: {pokemonData.height} decimetres</p>
                  <p className="card-text">Weight: {pokemonData.weight} hectograms</p>
                  <p className="card-text">Type: {pokemonData.types.map((type) => type.type.name).join(', ')}</p>
                  <p className="card-text">Moves: {pokemonData.moves.map((move) => move.move.name).slice(0, 4).join(', ')}</p>
                </div>
              </div>}
          </Col>
          <Col>
            <img src={`images/hangman/${mistakesCount}.png`} alt={`Hangman stage ${mistakesCount}`} />
            {renderUsedLetters()}
            {renderWord()}
            <div className='form-group'>
              {!isGameLost && !isGameWon &&
                <form onSubmit={(e) => { e.preventDefault(); }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a letter"
                    value={guess}
                    onChange={handleGuessChange}
                    maxLength="1"
                  />
                </form>
              }
              <button className="btn btn-primary mt-2" onClick={() => window.location.reload(false)}>
                New Game
              </button>
            </div>
          </Col>

        </Row>
        <div>

        </div>
      </>
    </div >
  );
}

export default HangmanGame;

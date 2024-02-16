import React, { useState, useEffect } from 'react';
import axios from 'axios';

const words = [
  "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran♀", "nidorina", "nidoqueen", "nidoran♂", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "digglet", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetch'd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr. mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew"
];


function HangmanGame() {
  const [word, setWord] = useState('');
  const [guessedWord, setGuessedWord] = useState([]);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [maxAttempts, setMaxAttempts] = useState(6);
  const [usedLetters, setUsedLetters] = useState([]);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setGuessedWord(new Array(randomWord.length).fill('_ '));
  }, []);

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    const guessLowerCase = guess.toLowerCase();
    if (guessLowerCase.length === 1 && !usedLetters.includes(guessLowerCase)) {
      const newGuessedWord = guessedWord.slice();
      let found = false;

      for (let i = 0; i < word.length; i++) {
        if (word[i] === guessLowerCase) {
          newGuessedWord[i] = guessLowerCase;
          found = true;
        }
      }

      if (!found) {
        setAttempts(attempts + 1);
      }

      setGuessedWord(newGuessedWord);
      setGuess('');
      setUsedLetters([...usedLetters, guessLowerCase]);
    }
  };

  const isGameWon = guessedWord.join('') === word;
  const isGameLost = attempts >= maxAttempts;

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

  const renderHint = () => {
    if (word) {
      fetchPokemonData(word.toLowerCase());
    }
    if (!pokemonData) {
      return null;
    }

    return (
      <div className="container">
        <h2>Who's that Pokemon?!</h2>
        <div style={{ backgroundColor: "white" }}>
          {!isGameWon && !isGameLost && <img src={pokemonData.sprites['front_shiny']} style={{ filter: 'brightness(0)' }} />}
          {(isGameWon) && <img src={pokemonData.sprites['front_shiny']} />}
          {(isGameLost) && <img src={pokemonData.sprites['front_shiny']} />}
        </div>
        <p>Height: {pokemonData.height} decimetres</p>
        <p>Weight: {pokemonData.weight} hectograms</p>
        <p>Type: {pokemonData.types.map((type) => type.type.name).join(', ')}</p>
        <p>Moves: {pokemonData.moves.map((move) => move.move.name).slice(0, 4).join(', ')}</p>
      </div>
    );
  };

  return (
    <div className="container mt-5">
      <h1>Pokemon Hangman Game</h1>
      <p>Try to guess the Pokemon by entering a letter at a time. You have {maxAttempts - attempts} attempts left.</p>

      {isGameLost && <>
        <p className="text-danger">You lost! The word was "{word}".</p>
      </>}
      {isGameWon && <p className="text-success">Congratulations! You guessed the word: "{word}".</p>}

      <>
        {renderWord()}
        {renderUsedLetters()}
        <form onSubmit={handleGuessSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a letter"
              value={guess}
              onChange={handleGuessChange}
              maxLength="1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Guess
          </button>
          <div>
            <button className="btn btn-primary" onClick={() => window.location.reload(false)}>
              New Game
            </button>
          </div>
          {renderHint()}
        </form>
      </>
    </div>
  );
}

export default HangmanGame;

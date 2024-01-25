import React, { useState } from 'react';

function DictionaryLookup() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [error, setError] = useState('');

  const apiKey = 'cP1TKlvcDX/LLMcD5hHjKw==E5SrJvJtMhSJ8sRm'

  const lookupDictionary = () => {
    fetch(`https://api.api-ninjas.com/v1/dictionary?word=${word}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.valid) {
          setDefinition(data.definition);
          setError('');
        } else {
          setDefinition('');
          setError('Word not found in the dictionary.');
        }
      })
      .catch((error) => {
        setDefinition('');
        setError(`Error: ${error.message}`);
      });
  };

  return (
    <div className="container mt-5">
      <h1>Dictionary Lookup</h1>
      <div className="form-group">
        <label htmlFor="word">Enter a word:</label>
        <input
          type="text"
          className="form-control"
          id="wordInput"
          placeholder="Word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={lookupDictionary}>
        Lookup
      </button>
      {definition && (
        <div className="mt-3">
          <div className="alert alert-success">
            <h4 className="alert-heading">{word}</h4>
            <p>{definition}</p>
          </div>
        </div>
      )}
      {error && (
        <div className="mt-3">
          <div className="alert alert-danger">
            <p>{error}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DictionaryLookup;

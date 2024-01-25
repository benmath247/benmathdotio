import React, { useState } from 'react';

const TextLanguageDetector = () => {
  const [text, setText] = useState('');
  const [languageData, setLanguageData] = useState(null);
  const [error, setError] = useState(null);

  const detectLanguage = () => {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'cP1TKlvcDX/LLMcD5hHjKw==E5SrJvJtMhSJ8sRm';

    fetch(`https://api.api-ninjas.com/v1/textlanguage?text=${encodeURIComponent(text)}`, {
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setLanguageData(data);
        setError(null);
      })
      .catch((error) => {
        setLanguageData(null);
        setError(error.message);
      });
  };

  return (
    <div>
      <h2>Text Language Detector</h2>
      <div>
          <p>
              This API is not always accurate, but at least the API call is working!
          </p>
      </div>
      <div className="form-group">
        <label htmlFor="textInput">Enter Text:</label>
        <textarea
          id="textInput"
          className="form-control"
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={detectLanguage}>
        Detect Language
      </button>
      {error && <p className="text-danger">{error}</p>}
      {languageData && (
        <div>
          <h3>Detected Language:</h3>
          <p>Language: {languageData.language}</p>
          <p>ISO Code: {languageData.iso}</p>
        </div>
      )}
    </div>
  );
};

export default TextLanguageDetector;

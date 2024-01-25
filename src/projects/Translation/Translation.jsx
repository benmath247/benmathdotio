// AIzaSyBwHW6d6Fuza9d361bXe2WdzZ2p9yVndAU

import React, { useState, useEffect } from 'react';

const performTranslation = async (text, sourceLanguage, targetLanguage) => {
  try {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=AIzaSyBwHW6d6Fuza9d361bXe2WdzZ2p9yVndAU`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          source: sourceLanguage,
          target: targetLanguage,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data.data.translations[0].translatedText;
    } else {
      throw new Error('Failed to translate text');
    }
  } catch (error) {
    throw new Error('Error translating text:', error);
  }
};

const getLanguageName = (languageCode) => {
  // Add more language mappings as needed
  const languageMappings = {
    en: 'English',
    es: 'Spanish',
    fr: 'French',
    de: 'German',
    he: 'Hebrew',
    ar: 'Arabic',
    it: 'Italian',
    ru: 'Russian',
    yi: 'Yiddish',
    // Add more languages here
  };

  return languageMappings[languageCode] || 'Unknown Language';
};

function Translation() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [inputLanguage, setInputLanguage] = useState('en'); // Default to English
  const [outputLanguage, setOutputLanguage] = useState('es');
  const [alternatingLanguage, setAlternatingLanguage] = useState('en'); // Initial alternating language
  const [explainerTextPrimary, setExplainerTextPrimary] = useState(`Enter text in ${getLanguageName(inputLanguage)}, select the input and output languages, and click the 'Translate' button to translate the text. You can also click the 'Swap Languages' button to switch between input and output languages.`)
  const [swapButtonWords, setSwapButtonWords] = useState("Swap Lanaguages")
  const [translateButtonText, setTranslateButtonText] = useState("Translate")

  useEffect(() => {
    // Function to alternate between English and Spanish
    const alternateLanguages = () => {
      setAlternatingLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
    };

    // Set an interval to alternate languages every 5 seconds
    const interval = setInterval(alternateLanguages, 10000);

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);

  const translateText = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const translation = await performTranslation(inputText, alternatingLanguage, outputLanguage);
      setTranslatedText(translation);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  const handleInputChange = (event) => {
    setInputLanguage(event.target.value);
    setExplainerTextPrimary(`Enter text in ${getLanguageName(event.target.value)}, select the input and output languages, and click the 'Translate' button to translate the text. You can also click the 'Swap Languages' button to switch between input and output languages.`);
  };

  const handleOutputChange = (event) => {
    setOutputLanguage(event.target.value);
  };

  const handleSwapLanguages = () => {
    // Swap the input and output languages
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  };


  return (
    <div className="container mt-5">
      <h2 className="mb-3">Translation</h2>
      <p className="mb-3">
        {alternatingLanguage === 'en'
          ? `Enter text in ${getLanguageName(inputLanguage)}, select the input and output languages, and click the "Translate" button to translate the text. You can also click the "Swap Languages" button to switch between input and output languages.`
          : `Ingrese el texto en el campo de entrada a continuación, seleccione los idiomas de entrada y salida y haga clic en el botón "Traducir" para traducir el texto. También puede hacer clic en el botón "Intercambiar idiomas" para cambiar entre los idiomas de entrada y salida.`}
      </p>
      <form onSubmit={translateText}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder={`Enter text in ${getLanguageName(inputLanguage)}`}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className="input-group">
            <select
              className="form-select"
              value={inputLanguage}
              onChange={handleInputChange}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="he">Hebrew</option>
              <option value="ar">Arabic</option>
              <option value="it">Italian</option>
              <option value="ru">Russian</option>
              <option value="yi">Yiddish</option>
              {/* Add more input languages as needed */}
            </select>
              <span className="input-group-text">&#8594;</span>
            <select
              className="form-select"
              value={outputLanguage}
              onChange={handleOutputChange}
            >
              <option value="es">Spanish</option>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="he">Hebrew</option>
              <option value="ar">Arabic</option>
              <option value="it">Italian</option>
              <option value="ru">Russian</option>
              <option value="yi">Yiddish</option>
              {/* Add more output languages as needed */}
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          {translateButtonText}
        </button>
      </form>
      <button
        className="btn btn-secondary mt-3"
        onClick={handleSwapLanguages}
      >
        {swapButtonWords}
      </button>
      <div className="mt-3">
        <p className="lead">Translated Text:</p>
        <p className="fw-bold">{translatedText}</p>
      </div>
    </div>
  );
}

export default Translation;

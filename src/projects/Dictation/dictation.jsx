import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dictation = () => {
  const [transcript, setTranscript] = useState('');
  const [recording, setRecording] = useState(false);
  const [speechRecognition, setSpeechRecognition] = useState(null);

  useEffect(() => {
    // Check if the SpeechRecognition API is available in the browser
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US'; // Set the language (adjust as needed)

      recognition.onstart = () => {
        setRecording(true);
      };

      recognition.onresult = (event) => {
        const result = event.results[0][0];
        if (result) {
          setTranscript(result.transcript);
        }
      };

      recognition.onend = () => {
        setRecording(false);
      };

      recognition.onerror = (event) => {
        console.error('Error:', event.error);
        setRecording(false);
      };

      setSpeechRecognition(recognition);
    } else {
      console.error('SpeechRecognition API is not supported in this browser.');
    }

    return () => {
      if (speechRecognition) {
        speechRecognition.abort();
      }
    };
  }, []);

  const startRecording = () => {
    if (speechRecognition) {
      speechRecognition.start();
    }
  };

  const stopRecording = () => {
    if (speechRecognition && recording) {
      speechRecognition.stop();
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Speech-to-Text Dictation Tool</h1>
      <p>
        This tool allows you to convert your speech into text. Follow these steps to
        use the app:
      </p>
      <ol>
        <li>Click the "Start Recording" button to begin recording your speech.</li>
        <li>Speak clearly and concisely into your device's microphone.</li>
        <li>
          Click the "Stop Recording" button when you want to stop recording.
        </li>
      </ol>
      <p>Your recorded speech will appear in the "Transcript" section below.</p>
      <div className="mb-3">
        <button
          className="btn btn-primary"
          onClick={startRecording}
          disabled={recording}
        >
          Start Recording
        </button>
        <br />
        <button
          className="btn btn-primary"
          onClick={stopRecording}
          disabled={!recording}
        >
          Stop Recording
        </button>
      </div>
      <div className="transcript">
        <h5>Transcript:</h5>
        <p>{transcript}</p>
      </div>
      <div className='container'>

        <a href="portfolio">
          <Link to="/portfolio">
            <button className="btn btn-primary">
              Back to Portfolio
            </button>
          </Link>
        </a>
      </div>
    </div>

  );
};

export default Dictation;

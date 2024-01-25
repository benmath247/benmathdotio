import React, { useState, useRef } from 'react';

function FormatJson() {
  const [jsonData, setJsonData] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const textAreaRef = useRef(null);

  const handleInputChange = (event) => {
    setJsonData(event.target.value);
  };

  const analyzeJson = () => {
    try {
      const parsedData = JSON.parse(jsonData);
      const formattedData = JSON.stringify(parsedData, null, 2);
      setFormattedJson(formattedData);

      const analysisResult = analyzeObject(parsedData);
      setAnalysis(analysisResult);
    } catch (error) {
      alert('Invalid JSON data. Please check your input.');
      setFormattedJson('');
      setAnalysis(null);
    }
  };

  const analyzeObject = (obj, path = '') => {
    const result = {
      type: typeof obj,
    };

    if (Array.isArray(obj)) {
      result.type = 'array';
      result.items = {};

      if (obj.length > 0) {
        result.items = analyzeObject(obj[0], `${path}[0]`);
      }
    } else if (typeof obj === 'object') {
      result.type = 'object';
      result.properties = {};

      for (const key in obj) {
        result.properties[key] = analyzeObject(obj[key], `${path}.${key}`);
      }
    }

    return result;
  };

  const copyToClipboard = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand('copy');
    }
  };

  const renderAnalysis = (data, depth = 0) => {
    return (
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong>
            {typeof value === 'object' ? renderAnalysis(value, depth + 1) : ` ${value}`}
          </li>
        ))}
      </ul>
    );
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target.result;
        setJsonData(fileContent);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">JSON Formatter and Analyzer</h1>
      <p>
        Welcome to the JSON Formatter and Analyzer app. This tool allows you to enter JSON data and
        analyze it for its structure and content. After entering your JSON data, click the "Analyze JSON" button
        to format the JSON and provide a detailed analysis of its properties and values.
      </p>
      <div className="form-group">
        <label htmlFor="jsonData">Enter JSON data or Upload a .json file:</label>
        <input
          type="file"
          accept=".json"
          onChange={handleFileUpload}
        />
        <textarea
          id="jsonData"
          className="form-control"
          rows="10"
          value={jsonData}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={analyzeJson}>
        Format and Analyze JSON
      </button>
      <button className="btn btn-secondary ml-2" onClick={copyToClipboard}>
        Copy Formatted JSON to Clipboard
      </button>
      <textarea
        ref={textAreaRef}
        className="d-none"
        value={formattedJson}
        readOnly
      />
      <div>
        <div className="d-flex">
          <div className="mr-4 p-3" style={{ width: '50%', border: '1px solid #333333', margin: '10px', borderRadius: '10px', height: '600px', overflowY: 'scroll' }}>
            <h2>Formatted JSON:</h2>
            <pre>{formattedJson}</pre>
          </div>

          {(
            <div className='mr-4 p-3' style={{ width: '50%', border: '1px solid #333333', margin: '10px', borderRadius: '10px', height: '600px', overflowY: 'scroll' }}>
              <h2>Analysis:</h2>
              {analysis && renderAnalysis(analysis)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormatJson;

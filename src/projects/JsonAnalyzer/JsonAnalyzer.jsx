import React, { useState } from 'react';

function JsonAnalyzer() {
  const [jsonData, setJsonData] = useState('');
  const [analysis, setAnalysis] = useState(null);

  const analyzeJson = () => {
    try {
      const parsedData = JSON.parse(jsonData);
      const analysisResult = analyzeObject(parsedData);
      setAnalysis(analysisResult);
    } catch (error) {
      setAnalysis(null);
      console.error('Error parsing JSON:', error);
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

  return (
    <div>
      <h1>JSON Analyzer</h1>
      <textarea
        placeholder="Enter JSON data here"
        value={jsonData}
        onChange={(e) => setJsonData(e.target.value)}
      />
      <button onClick={analyzeJson}>Analyze</button>
      {analysis && (
        <div>
          <h2>Analysis</h2>
          {renderAnalysis(analysis)}
        </div>
      )}
    </div>
  );
}

export default JsonAnalyzer;

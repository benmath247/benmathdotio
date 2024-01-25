import React, { useState } from 'react';
import './ColorSelector.css';

function ColorSelector() {
  const [inputColor, setInputColor] = useState('');
  const [complementaryColors, setComplementaryColors] = useState([]);
  const [analogousColors, setAnalogousColors] = useState([]);
  const [inverseColor, setInverseColor] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const isValidHex = (hex) => /^#[0-9A-F]{6}$/i.test(hex);

  const calculateComplementaryColors = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    const complementaryR = 255 - r;
    const complementaryG = 255 - g;
    const complementaryB = 255 - b;

    const complementaryHex = `#${complementaryR.toString(16).padStart(2, '0')}${complementaryG.toString(16).padStart(2, '0')}${complementaryB.toString(16).padStart(2, '0')}`;

    return [complementaryHex];
  };

  const calculateAnalogousColors = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    const analogousColors = [];

    for (let i = 1; i <= 5; i++) {
      const adjustedR = (r + 20 * i) % 256;
      const adjustedG = (g + 20 * i) % 256;
      const adjustedB = (b + 20 * i) % 256;

      const analogousHex = `#${adjustedR.toString(16).padStart(2, '0')}${adjustedG.toString(16).padStart(2, '0')}${adjustedB.toString(16).padStart(2, '0')}`;

      analogousColors.push(analogousHex);
    }

    return analogousColors;
  };

  const calculateInverseColor = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    return luminance > 128 ? '#000000' : '#ffffff';
  };

  const handleColorSubmit = (e) => {
    e.preventDefault();

    if (isValidHex(inputColor)) {
      const complementaryColors = calculateComplementaryColors(inputColor);
      const analogousColors = calculateAnalogousColors(inputColor);
      const inverse = calculateInverseColor(inputColor);
      setComplementaryColors(complementaryColors);
      setAnalogousColors(analogousColors);
      setInverseColor(inverse);
      setSelectedColor(inputColor);
    } else {
      setComplementaryColors([]);
      setAnalogousColors([]);
      setInverseColor('');
      setSelectedColor('');
    }
  };

  const handleColorChange = (e) => {
    setInputColor(e.target.value.trim());
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);

    // Recalculate complementary, analogous, and inverse colors
    const complementaryColors = calculateComplementaryColors(color);
    const analogousColors = calculateAnalogousColors(color);
    const inverse = calculateInverseColor(color);
    
    setComplementaryColors(complementaryColors);
    setAnalogousColors(analogousColors);
    setInverseColor(inverse);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Color Selector</h2>
      <form onSubmit={handleColorSubmit} className="mb-4">
        <div className="form-group">
          <label htmlFor="colorInput">Enter a color (HEX format):</label>
          <input
            type="text"
            id="colorInput"
            className="form-control"
            value={inputColor}
            onChange={handleColorChange}
            placeholder="Enter a color (e.g., #FF5733)"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {selectedColor && (
        <div className="selected-color mb-4">
          <h3>Selected Color:</h3>
          <div style={{ backgroundColor: selectedColor }} className="color-box text-center">
            {selectedColor}
          </div>
        </div>
      )}
      {complementaryColors.length > 0 && (
        <div className="color-palette">
          <h3>Complementary Color:</h3>
          <div className="row">
            {complementaryColors.map((color, index) => (
              <div
                key={index}
                className="col-md-2 mb-3"
                onClick={() => handleColorClick(color)}
              >
                <div style={{ backgroundColor: color }} className="color-box text-center">
                  {color}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {analogousColors.length > 0 && (
        <div className="color-palette">
          <h3>Analogous Colors:</h3>
          <div className="row">
            {analogousColors.map((color, index) => (
              <div
                key={index}
                className="col-md-2 mb-3"
                onClick={() => handleColorClick(color)}
              >
                <div style={{ backgroundColor: color }} className="color-box text-center">
                  {color}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {inverseColor && (
        <div>
          <h3>Inverse Color:</h3>
          <div style={{ backgroundColor: inverseColor }} className="color-box inverse-color text-center">
            {inverseColor}
          </div>
        </div>
      )}
    </div>
  );
}

export default ColorSelector;

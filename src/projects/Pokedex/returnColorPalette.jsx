export default function returnColorPalette(hex) {
    const isValidHex = /^#[0-9A-F]{6}$/i.test(hex);
  
    if (!isValidHex) {
      return {
        inputColor: hex,
        complementaryColors: [],
        analogousColors: [],
        inverseColor: '',
        selectedColor: '',
      };
    }
  
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
  
    const complementaryColors = calculateComplementaryColors(hex);
    const analogousColors = calculateAnalogousColors(hex);
    const inverseColor = calculateInverseColor(hex);
  
    return {
      inputColor: hex,
      complementaryColors,
      analogousColors,
      inverseColor,
      selectedColor: hex,
    };
  }
  
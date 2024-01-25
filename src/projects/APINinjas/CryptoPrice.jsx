import React, { useState } from 'react';

const CryptoPrice = () => {
  const [targetCurrency, setTargetCurrency] = useState('');
  const [baseCurrency, setBaseCurrency] = useState('');
  const [priceData, setPriceData] = useState(null);
  const [error, setError] = useState(null);

  const fetchCryptoPrice = () => {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'cP1TKlvcDX/LLMcD5hHjKw==E5SrJvJtMhSJ8sRm';
    
    const symbol = targetCurrency.toLowerCase() + baseCurrency.toLowerCase();

    fetch(`https://api.api-ninjas.com/v1/cryptoprice?symbol=${symbol}`, {
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
        setPriceData(data);
        setError(null);
      })
      .catch((error) => {
        setPriceData(null);
        setError(error.message);
      });
  };

  return (
    <div>
      <h2>Crypto Price Checker</h2>
      <div className="form-group">
        <label htmlFor="targetCurrencyInput">Enter Target Currency:</label>
        <input
          type="text"
          id="targetCurrencyInput"
          className="form-control"
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="baseCurrencyInput">Enter Base Currency:</label>
        <input
          type="text"
          id="baseCurrencyInput"
          className="form-control"
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={fetchCryptoPrice}>
        Get Price
      </button>
      {error && <p className="text-danger">{error}</p>}
      {priceData && (
        <table className="table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Price</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{priceData.symbol}</td>
              <td>{priceData.price}</td>
              <td>{new Date(priceData.timestamp * 1000).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CryptoPrice;

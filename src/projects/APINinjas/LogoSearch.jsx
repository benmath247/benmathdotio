import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LogoSearch() {
  const [logoData, setLogoData] = useState([]);
  const [companyName, setCompanyName] = useState('');

  // Function to fetch logo data based on the company name
  const fetchLogoData = () => {
    // Define the API key (same as before)
    const apiKey = 'cP1TKlvcDX/LLMcD5hHjKw==E5SrJvJtMhSJ8sRm';

    // Define the company name based on user input
    const apiUrl = `https://api.api-ninjas.com/v1/logo?name=${companyName}`;

    // Make the Axios GET request with headers
    axios
      .get(apiUrl, {
        headers: {
          'X-Api-Key': apiKey,
        },
      })
      .then((response) => {
        // Set the response data
        setLogoData(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error:', error);
      });
  };


  // Function to handle company name input change
  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  // Function to submit the search
  const handleSubmit = (event) => {
    event.preventDefault();
    // Fetch logo data when the user submits the search
    fetchLogoData();
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Company Logo Search</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row mb-4">
          <div className="col">
            <input
              type="text"
              name="companyName"
              value={companyName}
              className="form-control"
              placeholder="Enter Company Name"
              onChange={handleCompanyNameChange}
            />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary">
              Search Logo
            </button>
          </div>
        </div>
      </form>
      {logoData.length > 0 && (
        <div>
          <h2>Logo Details</h2>
          <p>Name: {logoData[0].name}</p>
          <p>Ticker: {logoData[0].ticker}</p>
          <div className="bg-white p-3">
            <img
              src={logoData[0].image}
              alt={`${logoData[0].name} Logo`}
              style={{ maxWidth: '200px' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default LogoSearch;

import React, { useState, useEffect } from 'react';

function Cars() {
  const [carsData, setCarsData] = useState([]);
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    fuel_type: '',
    drive: '',
    cylinders: '',
    transmission: '',
    year: '',
    min_city_mpg: '',
    max_city_mpg: '',
    min_hwy_mpg: '',
    max_hwy_mpg: '',
    min_comb_mpg: '',
    max_comb_mpg: '',
    limit: 50,
  });

  const apiKey = 'cP1TKlvcDX/LLMcD5hHjKw==E5SrJvJtMhSJ8sRm'

  useEffect(() => {
    // Function to fetch car data from the API
    const getCarsData = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/cars?${new URLSearchParams(formData).toString()}`,
          {
            method: 'GET',
            headers: {
              'X-Api-Key': apiKey,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }

        const data = await response.json();
        setCarsData(data);
      } catch (error) {
        console.error('API Request Error:', error);
      }
    };

    getCarsData();
  }, [formData]);

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission (optional)
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can trigger the API request here if you want to fetch data on form submission.
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Cars Data</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="make" className="form-label">Make:</label>
            <input
              type="text"
              id="make"
              name="make"
              className="form-control"
              value={formData.make}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <label htmlFor="model" className="form-label">Model:</label>
            <input
              type="text"
              id="model"
              name="model"
              className="form-control"
              value={formData.model}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="fuel_type" className="form-label">Fuel Type:</label>
            <select
              id="fuel_type"
              name="fuel_type"
              className="form-select"
              value={formData.fuel_type}
              onChange={handleInputChange}
            >
              <option value="">Select Fuel Type</option>
              <option value="gas">Gas</option>
              <option value="diesel">Diesel</option>
              <option value="electricity">Electricity</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="drive" className="form-label">Drive Transmission:</label>
            <select
              id="drive"
              name="drive"
              className="form-select"
              value={formData.drive}
              onChange={handleInputChange}
            >
              <option value="">Select Drive Transmission</option>
              <option value="fwd">Front-Wheel Drive (FWD)</option>
              <option value="rwd">Rear-Wheel Drive (RWD)</option>
              <option value="awd">All-Wheel Drive (AWD)</option>
              <option value="4wd">Four-Wheel Drive (4WD)</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="cylinders" className="form-label">Cylinders:</label>
            <select
              id="cylinders"
              name="cylinders"
              className="form-select"
              value={formData.cylinders}
              onChange={handleInputChange}
            >
              <option value=""></option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="16">16</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="transmission" className="form-label">Transmission:</label>
            <select
              id="transmission"
              name="transmission"
              className="form-select"
              value={formData.transmission}
              onChange={handleInputChange}
            >
              <option value="">Select Transmission</option>
              <option value="m">Manual</option>
              <option value="a">Automatic</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="year" className="form-label">Year:</label>
            <input
              type="number"
              id="year"
              name="year"
              className="form-control"
              value={formData.year}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <label htmlFor="limit" className="form-label">Limit (Results to return):</label>
            <input
              type="number"
              id="limit"
              name="limit"
              className="form-control"
              value={formData.limit}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="min_city_mpg" className="form-label">Minimum City MPG:</label>
            <input
              type="number"
              id="min_city_mpg"
              name="min_city_mpg"
              className="form-control"
              value={formData.min_city_mpg}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <label htmlFor="max_city_mpg" className="form-label">Maximum City MPG:</label>
            <input
              type="number"
              id="max_city_mpg"
              name="max_city_mpg"
              className="form-control"
              value={formData.max_city_mpg}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="min_hwy_mpg" className="form-label">Minimum Highway MPG:</label>
            <input
              type="number"
              id="min_hwy_mpg"
              name="min_hwy_mpg"
              className="form-control"
              value={formData.min_hwy_mpg}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <label htmlFor="max_hwy_mpg" className="form-label">Maximum Highway MPG:</label>
            <input
              type="number"
              id="max_hwy_mpg"
              name="max_hwy_mpg"
              className="form-control"
              value={formData.max_hwy_mpg}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="min_comb_mpg" className="form-label">Minimum Combination MPG:</label>
            <input
              type="number"
              id="min_comb_mpg"
              name="min_comb_mpg"
              className="form-control"
              value={formData.min_comb_mpg}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <label htmlFor="max_comb_mpg" className="form-label">Maximum Combination MPG:</label>
            <input
              type="number"
              id="max_comb_mpg"
              name="max_comb_mpg"
              className="form-control"
              value={formData.max_comb_mpg}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      <table className="table mt-4">
        {/* Table headers */}
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Fuel Type</th>
            <th>Cylinders</th>
            <th>Drive</th>
            <th>Transmission</th>
            <th>City MPG</th>
            <th>Highway MPG</th>
            <th>Combination MPG</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {carsData.map((car, index) => (
            <tr key={index}>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.fuel_type}</td>
              <td>{car.cylinders}</td>
              <td>{car.drive}</td>
              <td>{car.transmission}</td>
              <td>{car.city_mpg}</td>
              <td>{car.highway_mpg}</td>
              <td>{car.combination_mpg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cars;

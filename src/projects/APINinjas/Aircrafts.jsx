import React, { useState } from 'react';
import axios from 'axios';

import { Form, Button, Table, Row, Col, Container } from 'react-bootstrap';

function AircraftApiComponent() {
  const [parameters, setParameters] = useState({
    manufacturer: '',
    model: '',
    engine_type: '',
    min_speed: '',
    max_speed: '',
    min_range: '',
    max_range: '',
    min_length: '',
    max_length: '',
    min_height: '',
    max_height: '',
    min_wingspan: '',
    max_wingspan: '',
    limit: '30', // Default limit
  });

  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParameters({ ...parameters, [name]: value });
  };

  const handleApiCall = async () => {
    try {
      const apiKey = 'cP1TKlvcDX/LLMcD5hHjKw==E5SrJvJtMhSJ8sRm'; // Replace with your API key
      const response = await axios.get('https://api.api-ninjas.com/v1/aircraft', {
        params: parameters,
        headers: {
          'X-Api-Key': apiKey,
        },
      });
      setResponse(response.data);
    } catch (error) {
      console.error('API request failed:', error);
    }
  };

  return (
    <div>
      <h1>Find Aircraft Data</h1>
      <Form>
        {/* Input fields for parameters */}
        <Row>
          <Col>
          <Form.Group>
  <Form.Label htmlFor="manufacturer">Manufacturer:</Form.Label>
  <Form.Control
    as="select" // Use "as" attribute to create a dropdown
    name="manufacturer"
    id="manufacturer"
    value={parameters.manufacturer}
    onChange={handleChange}
  >
    <option value="">Select Manufacturer</option> {/* Optional default value */}
    <option value="Boeing">Boeing</option>
    <option value="Airbus">Airbus</option>
    <option value="Lockheed Martin">Lockheed Martin</option>
    <option value="Embraer">Embraer</option>
    <option value="Bombardier">Bombardier</option>
    <option value="Mitsubishi">Mitsubishi Aircraft Corporation</option>
    <option value="Hawker Beechcraft">Hawker Beechcraft</option>
    <option value="Pilatus">Pilatus Aircraft</option>
    <option value="Cessna">Cessna</option>
    <option value="Gulfstream Aerospace">Gulfstream Aerospace</option>
    <option value="Beechcraft">Beechcraft</option>
    <option value="Piaggio">Piaggio Aerospace</option>
    <option value="Cirrus">Cirrus Aircraft</option>
    <option value="Piper Aircraft">Piper Aircraft</option>
    <option value="Diamond Aircraft">Diamond Aircraft</option>
    <option value="Quest Aircraft">Quest Aircraft</option>
  </Form.Control>
</Form.Group>

          </Col>
          <Col>
        <Form.Group>
          <Form.Label htmlFor="model">Model:</Form.Label>
          <Form.Control
            type="text"
            name="model"
            id="model"
            value={parameters.model}
            onChange={handleChange}
          />
        </Form.Group>
          </Col>
            <Col>
            <Form.Group>
  <Form.Label htmlFor="engine_type">Engine Type:</Form.Label>
  <Form.Control
    as="select"  // Use "as" prop to specify it's a dropdown
    name="engine_type"
    id="engine_type"
    value={parameters.engine_type}
    onChange={handleChange}
  >
    <option value=""> </option> {/* Option to leave it blank */}
    <option value="piston">Piston</option>
    <option value="propjet">Propjet</option>
    <option value="jet">Jet</option>
  </Form.Control>
</Form.Group>


            </Col>
            </Row>
            <Row>
              <Col>
        <Form.Group>
          <Form.Label htmlFor="min_speed">Min Speed (knots):</Form.Label>
          <Form.Control
            type="text"
            name="min_speed"
            id="min_speed"
            value={parameters.min_speed}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="max_speed">Max Speed (knots):</Form.Label>
          <Form.Control
            type="text"
            name="max_speed"
            id="max_speed"
            value={parameters.max_speed}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="min_range">Min Range (nautical miles):</Form.Label>
          <Form.Control
            type="text"
            name="min_range"
            id="min_range"
            value={parameters.min_range}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="max_range">Max Range (nautical miles):</Form.Label>
          <Form.Control
            type="text"
            name="max_range"
            id="max_range"
            value={parameters.max_range}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="min_length">Min Length (feet):</Form.Label>
          <Form.Control
            type="text"
            name="min_length"
            id="min_length"
            value={parameters.min_length}
            onChange={handleChange}
          />
        </Form.Group>
              </Col>
              <Col>
        <Form.Group>
          <Form.Label htmlFor="max_length">Max Length (feet):</Form.Label>
          <Form.Control
            type="text"
            name="max_length"
            id="max_length"
            value={parameters.max_length}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="min_height">Min Height (feet):</Form.Label>
          <Form.Control
            type="text"
            name="min_height"
            id="min_height"
            value={parameters.min_height}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="max_height">Max Height (feet):</Form.Label>
          <Form.Control
            type="text"
            name="max_height"
            id="max_height"
            value={parameters.max_height}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="min_wingspan">Min Wingspan (feet):</Form.Label>
          <Form.Control
            type="text"
            name="min_wingspan"
            id="min_wingspan"
            value={parameters.min_wingspan}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="max_wingspan">Max Wingspan (feet):</Form.Label>
          <Form.Control
            type="text"
            name="max_wingspan"
            id="max_wingspan"
            value={parameters.max_wingspan}
            onChange={handleChange}
          />
        </Form.Group>
        </Col>
        </Row>
        <Button variant="primary" onClick={handleApiCall}>
          Get Aircraft Data
        </Button>
      </Form>
      {response && (
        <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Engine Type</th>
              <th>Engine Thrust (lb-ft)</th>
              <th>Max Speed (knots)</th>
              <th>Cruise Speed (knots)</th>
              <th>Ceiling (ft)</th>
              <th>Takeoff Ground Run (ft)</th>
              <th>Landing Ground Roll (ft)</th>
              <th>Gross Weight (lbs)</th>
              <th>Empty Weight (lbs)</th>
              <th>Length (ft)</th>
              <th>Height (ft)</th>
              <th>Wing Span (ft)</th>
              <th>Range (nautical miles)</th>
            </tr>
          </thead>
          <tbody>
            {response.map((aircraft, index) => (
              <tr key={index}>
                <td>{aircraft.manufacturer}</td>
                <td>{aircraft.model}</td>
                <td>{aircraft.engine_type}</td>
                <td>{aircraft.engine_thrust_lb_ft}</td>
                <td>{aircraft.max_speed_knots}</td>
                <td>{aircraft.cruise_speed_knots}</td>
                <td>{aircraft.ceiling_ft}</td>
                <td>{aircraft.takeoff_ground_run_ft}</td>
                <td>{aircraft.landing_ground_roll_ft}</td>
                <td>{aircraft.gross_weight_lbs}</td>
                <td>{aircraft.empty_weight_lbs}</td>
                <td>{aircraft.length_ft}</td>
                <td>{aircraft.height_ft}</td>
                <td>{aircraft.wing_span_ft}</td>
                <td>{aircraft.range_nautical_miles}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        </Container>
      )}
    </div>
  );
}

export default AircraftApiComponent;

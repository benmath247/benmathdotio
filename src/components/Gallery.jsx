import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Gallery = ({ pics }) => {
  return (
    <Container fluid>
      {Array.from({ length: Math.ceil(pics.length / 4) }, (_, rowIndex) => (
        <Row key={rowIndex}>
          {pics.slice(rowIndex * 4, (rowIndex + 1) * 4).map((url, colIndex) => (
            <Col key={colIndex} md={3} sm={6}>
              <img
                className="img-fluid"
                src={url}
                alt={`Pokemon ${rowIndex * 4 + colIndex + 1}`}
              />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Gallery;

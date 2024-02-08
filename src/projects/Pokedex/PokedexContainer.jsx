import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Define the ErrorHandlingImage component
class ErrorHandlingImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageError: false,
    };
  }

  handleImageError = () => {
    this.setState({ imageError: true });
  };

  render() {
    const { src, alt, ...otherProps } = this.props;
    const { imageError } = this.state;

    return (
      <img
        src={src}
        alt={alt}
        onError={this.handleImageError}
        style={{ display: imageError ? 'none' : 'block' }}
        {...otherProps}
      />
    );
  }
}

const PokedexContainer = ({ children, colorBackground }) => (
  <Container className="pokedex-container-styled" style={{ backgroundColor: colorBackground }}>

    <Link to='/pokedex'>
      {/* Use the ErrorHandlingImage component for the Pokedex Logo */}
      <ErrorHandlingImage src='/portfolio/games/Pokedex.png' alt='Pokedex Logo' className="grow-on-hover-high pokedex-logo" />
    </Link>
    <Row>
      {children}
    </Row>
  </Container>
);

export default PokedexContainer;

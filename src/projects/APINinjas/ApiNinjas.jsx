import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import LogoSearch from './LogoSearch';
// import DNSLookup from './DNSLookup'; // Import components for each option
// import Dogs from './Dogs';
// import Embeddings from './Embeddings';
// import Emoji from './Emoji';
// import ExchangeRate from './ExchangeRate';
import Exercises from './Exercises';
import Aircrafts from './Aircrafts';
import Cars from './Cars';
import DictionaryLookup from './Dictionary';
import CryptoPrice from './CryptoPrice';
import APINinjasHome from './APINinjasHome';
import TextLanguageDetector from './TextLanguageDetector';
// import FaceDetect from './FaceDetect';
// import Facts from './Facts';
// import Geocoding from './Geocoding';
// import Helicopter from './Helicopter';
// import HistoricalEvents from './HistoricalEvents';
// import HistoricalFigures from './HistoricalFigures';
// import Hobbies from './Hobbies';
// import Holidays from './Holidays';
// import IBANNew from './IBANNew';
// import ImageToText from './ImageToText';
// import Inflation from './Inflation';
// import InterestRate from './InterestRate';
// import IPLookup from './IPLookup';
// import Jokes from './Jokes';
// import Logo from './Logo';
// import LoremIpsum from './LoremIpsum';
// import MortgageCalculator from './MortgageCalculator';
// import Motorcycles from './Motorcycles';
// import Nutrition from './Nutrition';
// import ObjectDetection from './ObjectDetection';
// import PasswordGenerator from './PasswordGenerator';
// import Planets from './Planets';
// import ProfanityFilter from './ProfanityFilter';
// import QRCode from './QRCode';
// import Quotes from './Quotes';
// import RandomImage from './RandomImage';
// import RandomUser from './RandomUser';
// import RandomWord from './RandomWord';
// import Recipe from './Recipe';
// import ReverseGeocoding from './ReverseGeocoding';
// import Rhyme from './Rhyme';
// import Riddles from './Riddles';
// import SalesTax from './SalesTax';
// import SECNew from './SECNew';
// import Sentiment from './Sentiment';
// import Stars from './Stars';
// import SWIFTCodeNew from './SWIFTCodeNew';
// import TextLanguage from './TextLanguage';
// import TextSimilarity from './TextSimilarity';
// import Thesaurus from './Thesaurus';
// import Timezone from './Timezone';
// import Trivia from './Trivia';
// import URLLookup from './URLLookup';
// import ValidatePhone from './ValidatePhone';
// import VINLookup from './VINLookup';
// import Weather from './Weather';
// import WebScraperNew from './WebScraperNew';
// import Whois from './Whois';
// import WorldTime from './WorldTime';
// import ZipCode from './ZipCode';

function APINinjasNav() {
  const [key, setKey] = useState('Home'); // Default active tab
  const [selectedComponent, setSelectedComponent] = useState('Home');

  useEffect(() => {
      // Function to set selected component based on the active tab
      const setComponentByTab = (tabKey) => {
          switch (tabKey) {
        case 'Home':
          setSelectedComponent(<APINinjasHome/>);
          break;
        case 'Exercises':
          setSelectedComponent(<Exercises />);
          break;
        case 'Cars':
          setSelectedComponent(<Cars />);
          break;
        case 'Logo Search':
          setSelectedComponent(<LogoSearch />);
          break;
        case 'Aircrafts':
          setSelectedComponent(<Aircrafts />);
          break;
        case 'Dictionary':
          setSelectedComponent(<DictionaryLookup />);
          break;
        case 'Crypto Price':
          setSelectedComponent(<CryptoPrice />);
          break;
        case 'Text Language Detector':
          setSelectedComponent(<TextLanguageDetector />);
          break;
      }
    };

    setComponentByTab(key);
  }, [key]);

  return (
    <div className="container">
      <h1 style={{ paddingTop: "100px" }} className="text-center">API Ninjas</h1>
      <Tab.Container id="component-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
        <Container>
          <Nav variant="pills" className="justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey="Exercises">Exercises</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Logo Search">Logo Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Aircrafts">Aircrafts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Dictionary">Dictionary</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Cars">Cars</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Crypto Price">Crypto Price</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Text Language Detector">Text Language Detector</Nav.Link>
            </Nav.Item>
            {/* Add links for other components... */}
          </Nav>
        </Container>
        <Tab.Content>
          <Tab.Pane eventKey="Exercises">
            {selectedComponent}
          </Tab.Pane>
          <Tab.Pane eventKey="Logo Search">
            {selectedComponent}
          </Tab.Pane>
          <Tab.Pane eventKey="Aircrafts">
            {selectedComponent}
          </Tab.Pane>
          <Tab.Pane eventKey="Dictionary">
            {selectedComponent}
          </Tab.Pane>
          <Tab.Pane eventKey="Cars">
            {selectedComponent}
          </Tab.Pane>
          <Tab.Pane eventKey="Crypto Price">
            {selectedComponent}
          </Tab.Pane>
          <Tab.Pane eventKey="Home">
            {selectedComponent}
          </Tab.Pane>
          <Tab.Pane eventKey="Text Language Detector">
            {selectedComponent}
          </Tab.Pane>
          {/* Add panes for other components... */}
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default APINinjasNav;

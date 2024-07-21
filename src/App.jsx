import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import APINinjasNav from './projects/APINinjas/ApiNinjas';
import './App.css';

// Import React Icons
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import FormatJson from './projects/JsonPretty/FormatJson';
import TikTacToe from './projects/TikTacToe/TikTacToe';
import HangmanGame from './projects/Hangman/Hangman';
import ColorSelector from './projects/Colors/ColorSelector';
import MemoryGame from './projects/Memory/Memory';
import NumberGuessingGame from './projects/Numbers/Numbers';
import Translation from './projects/Translation/Translation';
import Dictation from './projects/Dictation/dictation';
import Pokedex from './projects/Pokedex/Pokedex';
import ContactForm from './pages/Contact';
import PokemonDetailsPage from './projects/Pokedex/PokemonDetails';
import PokedexType from './projects/Pokedex/PokedexType';
import DaysSinceQuit from './projects/QuitSmoking/DaysSinceQuit';
import ExampleCall from './projects/workoutPlanner/examplecall';
import BlogPostList from './pages/Blog';

import { allPostsData } from './components/allPostsData';
import BlogDetails from './pages/BlogDetails';
import Foods from './projects/FoodAPI/Foods';
import Retirement from './projects/Retirement/Retirement';

// Import constants
import { GITHUB_URL, LINKEDIN_URL, GOOGLE_DOCS_URL } from './constants';

function App() {
  const handleNavLinkClick = () => {
    const offcanvasElement = document.querySelector('.offcanvas');
    const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvasElement);
    bsOffcanvas.hide();
  };

  return (
    <Router>
      <Navbar expand="lg" className="mb-0 pb-0 border border-1" bg="dark">
        <Navbar.Brand className='p-2' href="/">BENMATH.COM</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">BENMATH.COM</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/blog" onClick={handleNavLinkClick}>Blog</Nav.Link>
              <Nav.Link as={Link} to="/portfolio" onClick={handleNavLinkClick}>Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={handleNavLinkClick}>Contact</Nav.Link>
            </Nav>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavLinkClick}
              >
                <FaGithub className="rotate-icon" size={20} />
              </Nav.Link>
              <Nav.Link
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavLinkClick}
              >
                <FaLinkedin className="rotate-icon" size={20} />
              </Nav.Link>
              <Nav.Link
                href={GOOGLE_DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavLinkClick}
              >
                <FaFilePdf className="rotate-icon" size={20} />
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog allPostsData={allPostsData} />} />
        <Route path="/blog/:title" element={<BlogDetails />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/json-formatter" element={<FormatJson />} />
        <Route path="/tik-tac-toe" element={<TikTacToe />} />
        <Route path="/hangman" element={<HangmanGame />} />
        <Route path="/colors" element={<ColorSelector />} />
        <Route path="/memory" element={<MemoryGame />} />
        <Route path="/translation" element={<Translation />} />
        <Route path="/numbers" element={<NumberGuessingGame />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/rothira" element={<Retirement />} />
        <Route path="/pokedex/type/:id" element={<PokedexType />} />
        <Route path="/pokedex/pokemon/:id" element={<PokemonDetailsPage />} />
        <Route path="/dictation" element={<Dictation />} />
        <Route path="/days-since-quit" element={<DaysSinceQuit />} />
        <Route path="/workoutPlanner" element={<ExampleCall />} />
        <Route path="/apininjas" element={<APINinjasNav />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

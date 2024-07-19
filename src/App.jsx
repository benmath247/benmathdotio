import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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

function App() {
  return (
    <Router>
      <Navbar expand="lg" className="mb-0 pb-0">
        <Navbar.Brand className='p-2' href="/">BENMATH.COM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/blog">Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio">Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact
            </Nav.Link>
            <Nav.Link
              href="https://github.com/benmath247"
              target="_blank"
              rel="noopener noreferrer"
            // className="rotate-icon"
            >
              <FaGithub
                className="rotate-icon"
                size={20} />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/benmath247/"
              target="_blank"
              rel="noopener noreferrer"
            // className="rotate-icon"
            >
              <FaLinkedin
                // className="rotate-icon"
                size={20}
                className="rotate-icon" />
            </Nav.Link>
            <Nav.Link
              href="https://docs.google.com/document/d/17JA9cJ-SORMmOwBwrK2uofu6XVnVmqTvXo8fTVGIs6s/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            // className="rotate-icon"
            >
              <FaFilePdf
                className="rotate-icon"
                size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
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

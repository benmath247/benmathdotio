import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavBar from './components/navBar/CustomNavBar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import APINinjasNav from './projects/APINinjas/ApiNinjas';
import { allPostsData } from './components/allPostsData';
import BlogDetails from './pages/BlogDetails';
import ContactForm from './pages/Contact';
import FormatJson from './projects/JsonPretty/FormatJson';
import TikTacToe from './projects/TikTacToe/TikTacToe';
import HangmanGame from './projects/Hangman/Hangman';
import MemoryGame from './projects/Memory/Memory';
import Translation from './projects/Translation/Translation';
import Dictation from './projects/Dictation/dictation';
import Pokedex from './projects/Pokedex/Pokedex';
import PokemonDetailsPage from './projects/Pokedex/PokemonDetails';
import PokedexType from './projects/Pokedex/PokedexType';
import Foods from './projects/FoodAPI/Foods';
import Retirement from './projects/Retirement/Retirement';

function App() {
  return (
    <Router>
      <CustomNavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog allPostsData={allPostsData} />} />
        <Route path="/blog/:title" element={<BlogDetails />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/json-formatter" element={<FormatJson />} />
        <Route path="/tik-tac-toe" element={<TikTacToe />} />
        <Route path="/hangman" element={<HangmanGame />} />
        <Route path="/memory" element={<MemoryGame />} />
        <Route path="/translation" element={<Translation />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/rothira" element={<Retirement />} />
        <Route path="/pokedex/type/:id" element={<PokedexType />} />
        <Route path="/pokedex/pokemon/:id" element={<PokemonDetailsPage />} />
        <Route path="/dictation" element={<Dictation />} />
        <Route path="/api-fun" element={<APINinjasNav />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavBar from './components/navBar/CustomNavBar';
import Home from './pages/Home';
import OverhaulingMyWebsite from './pages/blog/OverhaulingMyWebsite';
import WinterCatchUp from './pages/blog/WinterCatchUp';
function App() {
  const routes = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/blog/overhauling-my-website',
      element: <OverhaulingMyWebsite />
    },
    {
      path: '/blog/winter-catch-up',
      element: <WinterCatchUp />
    }
  ]

  return (
    <Router>
      <CustomNavBar />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;

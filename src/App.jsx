import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavBar from './components/navBar/CustomNavBar';
import Home from './pages/Home';
import OverhaulingMyWebsite from './pages/blog/OverhaulingMyWebsite';
import WinterCatchUp from './pages/blog/WinterCatchUp';
import LearningFromFailure from './pages/blog/LearningFromFailure';
import FixingMyTLS from './pages/blog/FixingMyTLS';
import Resume from './pages/Resume';


function App() {
  const blogRoutes = [
    {
      path: '/blog',
      element: <div>Blog Page</div>, // Placeholder for blog page
      showNavBar: true
    },
    {
      path: '/blog/overhauling-my-website',
      element: <OverhaulingMyWebsite />,
      showNavBar: true
    },
    {
      path: '/blog/winter-catch-up',
      element: <WinterCatchUp />,
      showNavBar: true
    },
    {
      path: '/blog/learning-from-failure',
      element: <LearningFromFailure />,
      showNavBar: true
    },
    {
      path: '/blog/fixing-my-tls-certificate',
      element: <FixingMyTLS />,
      showNavBar: true
    }
  ];

  const mainRoutes = [
    {
      path: '/',
      element: <Home />,
      showNavBar: true
    },
    {
      path: '/resume',
      element: <Resume />,
      showNavBar: false
    }
  ];

  const allRoutes = [...mainRoutes, ...blogRoutes];

  // Use location to determine if navbar should be shown
  const { pathname } = window.location;
  const showNavBar = allRoutes.find(r => r.path === pathname)?.showNavBar !== false;

  return (
    <Router>
      {showNavBar && <CustomNavBar />}
      <Routes>
        {allRoutes.map((route, index) => (
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

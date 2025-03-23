import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import SubClubCards from './components/SubClubCards';
import ClubLeadersCarousel from './components/ClubLeadersCarousel';
import Footer from './components/Footer';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <div>
        <Hero />
        <Routes>
          <Route path="/" element={<SubClubCards />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
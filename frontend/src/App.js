import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Hero from './components/Hero';
import SubClubCards from './components/SubClubCards';
import Footer from './components/Footer';
import ClubLeadersCarousel from './components/ClubLeadersCarousel';

const App = () => {
  return (
    <Router>
      <div>
        <Hero />
        <Routes>
          <Route path="/" element={<><SubClubCards /><ClubLeadersCarousel /></>} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
import React from 'react';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
import Hero from './components/Hero';
import AIAvengers from './pages/AIAvengers';
import WebWizards from './pages/WebWizards';
import DevDevils from './pages/DevDevils';
import CybersecScholars from './pages/CybersecScholars';
import About from './pages/About'; // Importing About page
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
=======
import Hero from './components/Hero';
import AIAvengers from './pages/AIAvengers';
import WebWizards from './pages/WebWizards';
import DevDevils from './pages/DevDevils';
import CybersecScholars from './pages/CybersecScholars';
import About from './pages/About'; // Importing About page
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
>>>>>>> Stashed changes
    <div className="main-container">
      <Hero />
      <About /> {/* Added About section */}
      <AIAvengers />
      <WebWizards />
      <DevDevils />
      <CybersecScholars />
      <Footer />
    </div>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  );
};

export default App;

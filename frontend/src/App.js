import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';

import Ai from './components/Ai';
import Web from './components/Web';
import Dev from './components/Dev';
import Cyber from './components/Cyber';


//import SubClubCards from './components/SubClubCards' <SubClubCards searchQuery={searchQuery} showNotification={showNotification} />;
import ClubLeadersCarousel from './components/ClubLeadersCarousel';
import Footer from './components/Footer';
import About from './pages/About';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

   // Function to display notification
   const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };


  return (
    <Router>
      <div>
        {notification && <div className="notification-bar">{notification}</div>}
        <Hero onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Web />
                <Ai />  
                <Dev />
                <Cyber />
                <ClubLeadersCarousel searchQuery={searchQuery} showNotification={showNotification} />
              </>
            }
          />
          <Route path="/about" element={<><About /></> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

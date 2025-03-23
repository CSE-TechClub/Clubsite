import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [notification, setNotification] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      onSearch(inputValue.trim().toLowerCase());
      setInputValue(''); // Clear input after search
    } else {
      showNotification('⚠️ Please enter a valid search term!');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Display notification for 3 seconds
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = () => {
      if (menuOpen) setMenuOpen(false);
    };
    
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [menuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent triggering the document click event
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hero-container">
      {notification && <div className="notification-bar">{notification}</div>}
      <nav className="hero-navbar">
        <Link to="/" className="logo">Club✨</Link>
        
        {/* Hamburger menu icon for mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        {/* Nav links - will be sidebar on mobile */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="https://clubregister.netlify.app/" onClick={() => setMenuOpen(false)}>Register</Link>
        </div>
      </nav>
      <div className="hero-content">
        <h1>Discover Yourself Beyond the Classroom</h1>
        <p>Discover endless possibilities in AI, Web, DevOps, and Cybersecurity.</p>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search clubs, leaders..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch}>🔍</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [notification, setNotification] = useState('');

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

  return (
    <div className="hero-container">
      {notification && <div className="notification-bar">{notification}</div>}
      <nav className="hero-navbar">
        <Link to="/" className="logo">Club✨</Link>
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="https://clubregister.netlify.app/">Register</Link>
        </div>
      </nav>
      <div className="hero-content">
        <h1>Explore Your Future with Us!</h1>
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

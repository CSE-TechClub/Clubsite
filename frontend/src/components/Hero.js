import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <h1>Welcome to Our Club!</h1>
      <p>Your gateway to innovation and collaboration.</p>
      <Link to="/about">
        <button>About Us</button>
      </Link>
    </div>
  );
};

export default Hero;
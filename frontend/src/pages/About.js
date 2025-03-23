import React from 'react';
<<<<<<< Updated upstream

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>
        This is the about page. It is a placeholder for the about page.
      </p>
=======
import '../styles/About.css';  // Ensure correct CSS import
import ClubLeadersCarousel from '../components/ClubLeadersCarousel'; // Import the component

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Our Club</h2>
      <ClubLeadersCarousel />
      
      {/* Commenting out the About button if it exists */}
      {/* <button className="about-btn">Learn More</button> */}
>>>>>>> Stashed changes
    </div>
  );
};

export default About;

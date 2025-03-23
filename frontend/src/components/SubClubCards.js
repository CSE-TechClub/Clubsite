import React from 'react';
import './SubClubCards.css';

const SubClubCards = () => {
  const clubs = [
    { name: 'AI Avengers', description: 'Explore AI and Machine Learning.' },
    { name: 'Web Wizards', description: 'Master Web Development.' },
    { name: 'Dev Devils', description: 'Dive into DevOps practices.' },
    { name: 'Cybersec Scholars', description: 'Secure the digital world.' },
  ];

  return (
    <div className="sub-club-cards">
      {clubs.map((club, index) => (
        <div key={index} className="sub-club-card">
          <h3>{club.name}</h3>
          <p>{club.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SubClubCards;

import React, { useState } from 'react';
import './SubClubCards.css';

const SubClubCards = () => {
  const [selectedClub, setSelectedClub] = useState(null);

  const clubs = [
    { name: 'AI Avengers', description: 'Explore AI and Machine Learning.' },
    { name: 'Web Wizards', description: 'Master Web Development.' },
    { name: 'Dev Devils', description: 'Dive into DevOps practices.' },
    { name: 'Cybersec Scholars', description: 'Secure the digital world.' },
  ];

  return (
    <div className="container">
      {/* Show club list if no club is selected */}
      {!selectedClub ? (
        <div className="sub-club-cards">
          {clubs.map((club, index) => (
            <div 
              key={index} 
              className="sub-club-card"
              onClick={() => setSelectedClub(club)}
            >
              <h3>{club.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        // Show selected club details in the center
        <div className="club-details">
          <h1>{selectedClub.name}</h1>
          <p>{selectedClub.description}</p>
          <button onClick={() => setSelectedClub(null)}>Back</button>
        </div>
      )}
    </div>
  );
};

export default SubClubCards;

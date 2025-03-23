import React, { useEffect, useRef } from 'react';
import './SubClubCards.css';

// Club Data with Individual Colors
const clubData = [
  {
    id: 'ai-avengers',
    name: 'AI Avengers',
    description: 'Explore AI and Machine Learning.',
    color: 'linear-gradient(135deg, #36a2eb, #4b8bda)',
  },
  {
    id: 'web-wizards',
    name: 'Web Wizards',
    description: 'Master Web Development.',
    color: 'linear-gradient(135deg, #ff4d4f, #ff6f61)',
  },
  {
    id: 'dev-devils',
    name: 'Dev Devils',
    description: 'Dive into DevOps practices.',
    color: 'linear-gradient(135deg, #4caf50, #66bb6a)',
  },
  {
    id: 'cybersec-scholars',
    name: 'Cybersec Scholars',
    description: 'Secure the digital world.',
    color: 'linear-gradient(135deg, #8a2be2, #6a1bbf)',
  },
];

// Club Section Component
const ClubSection = ({ club, sectionRef }) => (
  <section
    id={club.id}
    ref={sectionRef}
    className="sub-club-section"
    style={{ background: club.color }}
  >
    <div className="sub-club-content">
      <h1>{club.name}</h1>
      <p>{club.description}</p>
      <button className="register-btn">Register Now</button>
    </div>
  </section>
);

// Main SubClubCards Component
const SubClubCards = ({ searchQuery, showNotification }) => {
  const sectionRefs = useRef({});

  // Activate animations when sections enter the viewport
  useEffect(() => {
    const handleScroll = () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
            section.classList.add('active');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search and scroll to the matching section
  useEffect(() => {
    if (searchQuery) {
      const matchedClub = clubData.find(
        (club) =>
          club.name.toLowerCase().includes(searchQuery) ||
          club.description.toLowerCase().includes(searchQuery)
      );

      if (matchedClub) {
        sectionRefs.current[matchedClub.id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        sectionRefs.current[matchedClub.id]?.classList.add('highlight');

        setTimeout(() => sectionRefs.current[matchedClub.id]?.classList.remove('highlight'), 3000);
      } else {
        showNotification('⚠️ No matching club found!');
      }
    }
  }, [searchQuery, showNotification]);

  return (
    <div className="sub-club-sections">
      {clubData.map((club) => (
        <ClubSection
          key={club.id}
          club={club}
          sectionRef={(el) => (sectionRefs.current[club.id] = el)}
        />
      ))}
    </div>
  );
};

export default SubClubCards;

import React, { useEffect } from 'react';
import './ClubSection.css';

const Ai = () => {
    useEffect(() => {
        const handleScroll = () => {
        const section = document.querySelector('.ai-section');
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
            section.classList.add('active');
        }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".ai-section");
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        section.classList.add("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="club-section ai-section">
      <div className="club-content">
        <h1>AI Avengers</h1>
        <p>Explore AI and Machine Learning.</p>
        <button className="register-btn">Register Now</button>
      </div>
    </section>
  );
};

export default Ai;
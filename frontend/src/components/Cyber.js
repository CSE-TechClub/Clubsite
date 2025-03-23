import React, { useEffect } from 'react';
import './ClubSection.css';

const Cyber = () => {

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".cybersec-section");
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        section.classList.add("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="club-section cybersec-section">
      <div className="club-content">
        <h1>Cybersec Scholars</h1>
        <p>Secure the digital world.</p>
        <button className="register-btn">Register Now</button>
      </div>
    </section>
  );
};

export default Cyber;

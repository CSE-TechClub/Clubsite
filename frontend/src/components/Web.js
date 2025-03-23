import React, { useEffect } from 'react';
import './ClubSection.css';

const Web = () => {

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".web-section");
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        section.classList.add("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="club-section web-section">
      <div className="club-content">
        <h1>Web Wizards</h1>
        <p>Master Web Development.</p>
        <button className="register-btn">Register Now</button>
      </div>
    </section>
  );
};

export default Web;

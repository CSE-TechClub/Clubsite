import React, { useEffect } from 'react';
import './ClubSection.css';

const Dev = () => {

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".dev-section");
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        section.classList.add("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="club-section dev-section">
      <div className="club-content">
        <h1>Dev Devils</h1>
        <p>Dive into DevOps practices.</p>
        <button className="register-btn">Register Now</button>
      </div>
    </section>
  );
};

export default Dev;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer
    style={{
      fontFamily: "Arial, sans-serif",
      background: "#8a2be2",
      color: "#fff",
      textAlign: "center",
      padding: "30px 10px",
      marginTop: "40px",
      borderRadius: "20px 20px 0 0",
    }}
  >
    <div>
      <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>About Me</h2>
      <p style={{ fontSize: "16px", opacity: "0.8" }}>
        Explore our work on WebSite
      </p>
      <a
        href="https://github.com/CSE-TechClub"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#36a2eb",
          fontSize: "18px",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        GitHub
      </a>
    </div>
    <div style={{ marginTop: "20px" }}>
      <h3>Quick Links</h3>
      <p>
        <a
          href="https://chat.whatsapp.com/KNbL3mONL3BBHhNVIf4ayr "
          style={{
            color: "#ffce56",
            textDecoration: "none",
            margin: "0 10px",
          }}
        >
          WhatsApp
        </a>
        <a
          href="mailto:csekitclub@gmail.com"
          style={{
            color: "#ffce56",
            textDecoration: "none",
            margin: "0 10px",
          }}
        >
          Gmail
        </a>
        <a
          href="https://discuza.in/login"
          style={{
            color: "#ffce56",
            textDecoration: "none",
            margin: "0 10px",
          }}
        >
          Discuza Forum
        </a>
      </p>
    </div>
    <div style={{ marginTop: "20px", fontSize: "14px", opacity: "0.7" }}>
      &copy; 2025 CSE-TechClub. All Rights Reserved.
    </div>
  </footer>
  );
};

export default Footer;
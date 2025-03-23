import React from "react";
import Hero from "./components/Hero";
import About from "./pages/About";
import AIAvengers from "./pages/AIAvengers";
import WebWizards from "./pages/WebWizards";
import DevDevils from "./pages/DevDevils";
import CybersecScholars from "./pages/CybersecScholars";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <div className="main-container">
      <Hero />
      <About />
      <AIAvengers />
      <WebWizards />
      <DevDevils />
      <CybersecScholars />
      <Footer />
    </div>
  );
};

export default App;

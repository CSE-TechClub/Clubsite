import React from "react";
import ClubLeadersCarousel from "../components/ClubLeadersCarousel";

const About = () => {
  return (
    <section className="about-container" aria-label="About Our Club">
      <h2 className="text-2xl font-bold text-center my-4">About Our Club</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Our club is dedicated to fostering innovation, collaboration, and growth. Meet our passionate leaders who drive our vision forward.
      </p>
      <div className="mt-6">
        <ClubLeadersCarousel />
      </div>
    </section>
  );
};

export default About;

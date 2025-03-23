import React from "react";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./ClubLeadersCarousel.css"; // Custom styles

const ClubLeadersCarousel = () => {
  const leaders = [
    { name: "John Doe", role: "AI Avengers Lead", img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-ai-image%2Fdramatic-portrait-shot-handsome-man-generative-ai_39610723.htm&psig=AOvVaw0ercRGP8mOcNBeiXWPWXHJ&ust=1742794603458000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCID6qvy9n4wDFQAAAAAdAAAAABAE" },
    { name: "Jane Smith", role: "Web Wizards Lead", img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpict.ai%2Fimages%2FxG5Vbm%2Fview&psig=AOvVaw0ercRGP8mOcNBeiXWPWXHJ&ust=1742794603458000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCID6qvy9n4wDFQAAAAAdAAAAABAI" },
    { name: "Mary Johnson", role: "DevOps Lead", img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Feasy-peasy.ai%2Fai-image-generator%2Fimages%2Fmodern-indian-man-sitting-at-white-desk&psig=AOvVaw0ercRGP8mOcNBeiXWPWXHJ&ust=1742794603458000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCID6qvy9n4wDFQAAAAAdAAAAABAQ" },
  ];

  // Slick slider settings
  const settings = {
    dots: true, // Display navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // 3 seconds per slide
  };

  return (
    <div className="club-leaders-carousel">
      <h2>Club Leaders</h2>
      <Slider {...settings}>
        {leaders.map((leader, index) => (
          <div key={index} className="leader-card">
            <img src={leader.img} alt={leader.name} />
            <h4>{leader.name}</h4>
            <p>{leader.role}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClubLeadersCarousel;
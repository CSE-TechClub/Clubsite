import React from "react";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./ClubLeadersCarousel.css"; // Custom styles

const ClubLeadersCarousel = () => {
  const leaders = [
    { 
      name: "Keerthana M", 
      role: "AI Avengers Lead", 
      img: "https://media.licdn.com/dms/image/v2/D5603AQFchHgvr5EM8g/profile-displayphoto-shrink_800_800/B56ZWOUX19HQAg-/0/1741849466834?e=1748476800&v=beta&t=haOxkAlDMNjhuQoN9-lJNQigWLUxaMe6YzfvUuXyS8Y", 
      linkedin: "https://www.linkedin.com/in/keerthanam" 
    },
    { 
      name: "Jananya K H", 
      role: "Web Wizards Lead", 
      img: "https://media.licdn.com/dms/image/v2/D5603AQFU18ErvH4aLQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685717116449?e=1748476800&v=beta&t=ThRZSe3-n3FdAIMXtCRQV7PNxp_zTm15DAM1J4jX9Ao", 
      linkedin: "https://www.linkedin.com/in/jananyakh" 
    },
    { 
      name: "Jones Samuel", 
      role: "Backend Developer", 
      img: "https://media.licdn.com/dms/image/v2/D5635AQEQkWsFwxzjYw/profile-framedphoto-shrink_800_800/B56ZWhubfbHEAg-/0/1742175058306?e=1743325200&v=beta&t=GhATpwarlWY_1zwAL3c1onmgVxSfUNPFDz3vRx5A8Jo", 
      linkedin: "https://www.linkedin.com/in/jonessamuel" 
    },
    { 
      name: "Chinmay L", 
      role: "Frontend Developer", 
      img: "https://media.licdn.com/dms/image/v2/D5603AQFoQkq8L7VPyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729454804974?e=1748476800&v=beta&t=7Ct3aVjzdyEeQU5SaV8S_WcSq81QFM6DWEzqnB4__ow", 
      linkedin: "https://www.linkedin.com/in/chinmayl" 
    },
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
      <h2>Club Leads & Mentors</h2>
      <Slider {...settings}>
        {leaders.map((leader, index) => (
          <div key={index} className="leader-card">
            <img src={leader.img} alt={leader.name} className="leader-img" />
            <h4>{leader.name}</h4>
            <p>{leader.role}</p>
            <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">🔗 LinkedIn</a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClubLeadersCarousel;

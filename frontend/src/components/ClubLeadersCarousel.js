import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ClubLeadersCarousel.css';

const ClubLeadersCarousel = ({ searchQuery ,showNotification }) => {
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

  const sliderRef = useRef(null);
  const carouselRef = useRef(null);

  // Find and scroll to the matched leader
  useEffect(() => {
    if (searchQuery) {
      const matchedIndex = leaders.findIndex(
        (leader) =>
          leader.name.toLowerCase().includes(searchQuery) ||
          leader.role.toLowerCase().includes(searchQuery)
      );

      if (matchedIndex !== -1) {
        // Scroll to carousel and bring the matched leader to the front
        carouselRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        sliderRef.current?.slickGoTo(matchedIndex);

        // Highlight the matched card temporarily
        const matchedCard = document.getElementById(leaders[matchedIndex].id);
        matchedCard?.classList.add('highlight');
        setTimeout(() => matchedCard?.classList.remove('highlight'), 3000);
      }else {
        showNotification('⚠️ No matching leader found!');
      }
    }
  }, [searchQuery, leaders , showNotification]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="club-leaders-carousel" ref={carouselRef}>
      <h2>Club Leads & Mentors</h2>
      {leaders.length === 0 ? (
        <p>No leaders found!</p>
      ) : (
        <Slider {...settings} ref={sliderRef}>
          {leaders.map((leader, index) => (
            <div key={index} id={leader.id} className="leader-card">
              <img src={leader.img} alt={leader.name} />
              <h4>{leader.name}</h4>
              <p>{leader.role}</p>
              <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                🔗 LinkedIn
              </a>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ClubLeadersCarousel;

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
      role: "Web Wizards Lead ", 
      img: "https://media.licdn.com/dms/image/v2/D5603AQFU18ErvH4aLQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685717116449?e=1748476800&v=beta&t=ThRZSe3-n3FdAIMXtCRQV7PNxp_zTm15DAM1J4jX9Ao", 
      linkedin: "https://www.linkedin.com/in/jananyakh" 
    },
    { 
      name: "Jones Samuel", 
      role: "Backend Developer | Club volunteer", 
      img: "https://media.licdn.com/dms/image/v2/D5635AQEQkWsFwxzjYw/profile-framedphoto-shrink_800_800/B56ZWhubfbHEAg-/0/1742175058306?e=1743325200&v=beta&t=GhATpwarlWY_1zwAL3c1onmgVxSfUNPFDz3vRx5A8Jo", 
      linkedin: "https://www.linkedin.com/in/jonessamuel" 
    },
    { 
      name: "Chinmay L", 
      role: "Frontend Developer | Club volunteer", 
      img: "https://media.licdn.com/dms/image/v2/D5603AQFoQkq8L7VPyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729454804974?e=1748476800&v=beta&t=7Ct3aVjzdyEeQU5SaV8S_WcSq81QFM6DWEzqnB4__ow", 
      linkedin: "https://www.linkedin.com/in/chinmayl" 
    },
    { 
      name: "Vidya P B", 
      role: "Club volunteer", 
      img: "https://media.licdn.com/dms/image/v2/D5635AQHrwAe4u2NC9w/profile-framedphoto-shrink_800_800/B56ZXEQyPVHQAg-/0/1742754489681?e=1743361200&v=beta&t=j7UCU0OjD1UQJW5Xxta-IvXqOQttwSV8c7S-ypZKj3M", 
      linkedin: "https://www.linkedin.com/in/vidya-p-b-03955a25b" 
    },
    { 
      name: "James J ", 
      role: "Club volunteer", 
      img: "https://media.licdn.com/dms/image/v2/D4E03AQHPdvLL2rCnIw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724487899674?e=1748476800&v=beta&t=-ka_w_Ns_MzXXISjBa0qklgZgCkl60HSCqIEW8DnE38", 
      linkedin: "https://www.linkedin.com/in/james-j-824780324/" 
    },
    { 
      name: "Sapna Kamthane", 
      role: "Club volunteer", 
      img: "https://media.licdn.com/dms/image/v2/D5635AQGGwrsleX6PuA/profile-framedphoto-shrink_800_800/B56ZWj3r5ZGQAg-/0/1742211039200?e=1743361200&v=beta&t=XYaMofbzRs6IPRnsUZgo1wMeA76IWIh3zcnqCXNVPMY", 
      linkedin: "https://www.linkedin.com/in/sapna-kamthane-0661b5269" 
    },
    { 
      name: "Rudresh Manjunath", 
      role: "Club volunteer | Phase-Changers Lead", 
      img: "https://media.licdn.com/dms/image/v2/D5635AQG-89qG5DZL9Q/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1724616225632?e=1743361200&v=beta&t=Cth29fJ2y4tjxNbcKianc7Yj6nxsJra4rOiOTk32fN0", 
      linkedin: "https://www.linkedin.com/in/rudresh-manjunath21/" 
    },
    { 
      name: "Inchara Manjunath Achar", 
      role: "Club volunteer ", 
      img: "https://media.licdn.com/dms/image/v2/D5603AQGxpQ9mJ44hyg/profile-displayphoto-shrink_800_800/B56ZWOLAsbGoAc-/0/1741847007973?e=1748476800&v=beta&t=UCvcPpRoUB_cJ2qkQ0c-S3rDKTkx7ejHQhAfRKiYWSk", 
      linkedin: "https://www.linkedin.com/in/inchara-manjunath-achar-ba9703256/" 
    },
    { 
      name: "Daivik Girish M", 
      role: "Club volunteer | Organizers ", 
      img: "https://media.licdn.com/dms/image/v2/D5603AQEgqb0fy3B_jw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711790961935?e=1748476800&v=beta&t=2zybmUt28VPlvra1wM0sbdvekzdA5BYvLDApMUJhBiM", 
      linkedin: "https://www.linkedin.com/in/daivik-girish-m-701b9424b/" 
    },
    { 
      name: "Pragathi S", 
      role: "Club volunteer", 
      img: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", 
      linkedin: "https://www.linkedin.com/in/pragathi-s-9a558b25b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " 
    },
    { 
      name: "Bhavyashree K P", 
      role: "Club volunteer ", 
      img: "https://media.licdn.com/dms/image/v2/D5603AQHOr3nWo1dInQ/profile-displayphoto-shrink_800_800/B56ZWk9_ENGsAc-/0/1742229471386?e=1748476800&v=beta&t=MnT_CjGK8QB2w-x4blrNFAHw9JClA3hZ_Cee_jK3u04", 
      linkedin: "https://www.linkedin.com/in/bhavyashree-k-p-4329b6259/" 
    },
    { 
      name: "Chaitra Bai J R", 
      role: "Club volunteer", 
      img: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", 
      linkedin: "https://www.linkedin.com/in/chaitra-bai-j-r-6a859125b" 
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

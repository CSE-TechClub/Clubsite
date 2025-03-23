import React, { useEffect, useState, useRef } from 'react';
import './ClubSection.css';

const Cyber = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const fullText = 'Cybersec Scholars'; 
  const typingSpeed = 150; // milliseconds per character
  const typingRef = useRef(null);
  const cursorTimerRef = useRef(null);
  const sectionRef = useRef(null);
  const animationPlayedRef = useRef(false);
  
  // Keep the ref in sync with the state
  useEffect(() => {
    animationPlayedRef.current = animationPlayed;
  }, [animationPlayed]);
  
  // Handle section visibility and activation
  useEffect(() => {
    const stableHandleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          sectionRef.current.classList.add('active');
          // Start typing animation only if it hasn't played yet
          if (!animationPlayedRef.current) {
            startTypingAnimation();
            setAnimationPlayed(true);
          }
        }
      }
    };
    
    window.addEventListener('scroll', stableHandleScroll);
    // Initial check in case section is already visible
    stableHandleScroll();
    
    return () => window.removeEventListener('scroll', stableHandleScroll);
  }, []);
  
  // Function to start the typing animation
  const startTypingAnimation = () => {
    // Clear any existing animation
    if (typingRef.current) clearInterval(typingRef.current);
    if (cursorTimerRef.current) clearTimeout(cursorTimerRef.current);
    
    setDisplayText('');
    setShowCursor(true);
    
    let i = 0;
    typingRef.current = setInterval(() => {
      if (i < fullText.length) {
        // Use substring instead of charAt to prevent losing characters
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingRef.current);
        // Hide the cursor after typing is complete (after 1 second)
        cursorTimerRef.current = setTimeout(() => {
          setShowCursor(false);
        }, 1000);
      }
    }, typingSpeed);
  };
  
  // Clear interval and timeout on unmount
  useEffect(() => {
    return () => {
      if (typingRef.current) clearInterval(typingRef.current);
      if (cursorTimerRef.current) clearTimeout(cursorTimerRef.current);
    };
  }, []);

  return (
    <section className="club-section cybersec-section" ref={sectionRef}>
      <div className="club-content">
        <h1>
          {displayText || (animationPlayed && fullText)}
          {showCursor && <span className="cursor-blink">|</span>}
        </h1>
        <p>Secure the digital world.</p>
        <button className="register-btn">Register Now</button>
      </div>
    </section>
  );
};

export default Cyber;
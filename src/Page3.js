import React, { useState, useEffect } from "react";
import './App.css';

export default function Page2() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const currentPosition = window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - windowHeight;
      const scrollPercentage = (currentPosition / maxScroll) * 10;
      const newPosition = (scrollPercentage / 100) * windowHeight*15;
      setScrollPosition(newPosition);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/page3-bg-1.jpeg),url(${process.env.PUBLIC_URL}/page3-bg-2.jpeg)`,
    backgroundPosition: `center right, bottom left`,
    backgroundPositionY: `calc(100% - ${scrollPosition}px)`,
    backgroundRepeat: 'no-repeat',
    
  };
    return(
        <div className="Page3"
        id="page3-animation"
        style={backgroundImageStyle}
      
        
        >
        <p>Our Los Angeles <a href="#">web design</a>
        and  <a href="#">development</a>
        team is involved in professional B2B
        and B2C web design and development, <a href="#">mobile applications</a>, 
        <a href="#">digital strategy</a>, user
        experience, advertising, social media,
        <a href="#">content management systems</a>, and 
        <a href="#">email marketing initiatives.</a>
        </p>
        </div>
    )
}
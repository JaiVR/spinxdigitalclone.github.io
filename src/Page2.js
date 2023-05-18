import React, { useState, useEffect } from "react";
import './App.css';

export default function Page2() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const currentPosition = window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - windowHeight;
      const scrollPercentage = (currentPosition / maxScroll) * 100;
      const newPosition = (scrollPercentage / 100) * windowHeight*3;
      setScrollPosition(newPosition);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/page-2-bg.jpeg)`,
    backgroundPosition: `bottom left`,
    backgroundPositionY: `calc(100% - ${scrollPosition}px)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '25%',
    paddingBottom: '5%',
  };

  return (
    <div
      id="page2-animation"
      style={backgroundImageStyle}
      className="Page-2"
    >
      <h1>We are a web design company in Los Angeles</h1>
      <h2>
        At SPINX Digital, our team of innovators and digital marketers in tech
        and design bring skills above and beyond the ordinary to every project.
      </h2>
    </div>
  );
}

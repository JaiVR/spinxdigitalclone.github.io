import React, { useEffect, useRef, useState } from "react";
import './App.css';

export default function Page8(){
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
    return(
       <div className="Page8">
        <div className="page8-lhs">
          <h1>We are</h1>
          <h2 className={`page8-lhs-h2 ${isVisible ? "fade-in" : ""}`}
        ref={targetRef}>Creative Designers, Insightful Strategists, and Exceptional Engineers</h2>
          <p>We are SPINX Digital in Los Angeles and as innovators in creative website
             design & digital marketing, we build awesome digital masterpieces!</p>
        </div>
        <div className="page8-rhs">
            <div className="page8-rhs-components">
                <div>
                  <h1>17+</h1>
                  <h2>Years in business</h2>
                </div>
                <div>
                  <h1>250+</h1>
                  <h2>Websites and projects launched</h2>
                </div>
                <div>
                  <h1>30+</h1>
                  <h2>Awards and recogniton</h2>
                </div>

            </div>
        </div>
       </div>
    )
}
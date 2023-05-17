import React, { useEffect, useRef, useState } from "react";
import './App.css';

export default function Page4() {
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

  return (
    <div className="Page4">
      <h2>Award Winning Digital Agency</h2>
      <div
        className={`page4-ele ${isVisible ? "fade-in" : ""}`}
        ref={targetRef}
      >
        <div className="page4-subel-1">
          <a href="">
            <div>
              <img className="image-page4" src="page4-img-1.svg" alt="" />
            </div>
            <div>
              <a href="#">Quinn Emanuel</a>
            </div>
          </a>
        </div>
        <div className="page4-subel-1">
          <a href="">
            <div>
              <img className="image-page4" src="page4-img-2.svg" alt="" />
            </div>
            <div>
              <a href="#">Worldwide facilities</a>
            </div>
          </a>
        </div>
        <div className="page4-subel-1">
          <a href="">
            <div>
              <img className="image-page4" src="page4-img-3.svg" alt="" />
            </div>
            <div>
              <a href="#">The California Endowment</a>
            </div>
          </a>
        </div>
        <div className="page4-subel-4">
          <a href="">
            <div>
              <img className="image-page4" src="page4-img-1.svg" alt="" />
            </div>
            <div>
              <a href="#">BEGA America</a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

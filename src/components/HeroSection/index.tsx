import React, { useEffect, useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./style.scss";

const slides = [
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
    buttonTitle: "Know More",
  },
  {
    title: "Business Growth",
    description:
      "Discover ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
    buttonTitle: "Learn More",
  },
  {
    title: "Innovative Solutions",
    description:
      "Innovative ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
    buttonTitle: "Explore",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="hero-section-wrapper">
        <div className="action-and-text">
          <div className="title">{slides[currentIndex].title}</div>
          <div className="desc">{slides[currentIndex].description}</div>
          <button
            className="action-btn"
            onClick={() => alert(slides[currentIndex].buttonTitle)}
          >
            {slides[currentIndex].buttonTitle}
            <ArrowRightIcon />
          </button>
        </div>

        <div className="img-wrapper">
          <img src="/Person.png" alt="Person" />
        </div>
      </div>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default HeroSection;

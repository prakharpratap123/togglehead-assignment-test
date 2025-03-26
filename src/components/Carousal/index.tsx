import React, { useState, useEffect } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./style.scss";

const slides = [
  {
    id: 1,
    title: "Innovative Solutions",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
    url: "/Person.png",
  },
  {
    id: 2,
    title: "Creative Strategies",
    text: "Creative Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
    url: "/Person.png",
  },
  {
    id: 3,
    title: "Future Technologies",
    text: "Future Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
    url: "/Person.png",
  },
];

const extendedSlides = [...slides, slides[0]];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === slides.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
    }
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div className="slide" key={index}>
            <div className="content">
              <div className="title">{slide.title}</div>
              <div className="desc">{slide.text}</div>
              <button className="action-btn" onClick={() => alert("Explore")}>
                Explore
                <ArrowRightIcon />
              </button>
            </div>

            <div className="img-wrapper">
              <img src={slide.url} alt="Person" />
            </div>
          </div>
        ))}
      </div>

      <div className="indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex % slides.length ? "active" : ""}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

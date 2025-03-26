import { useRef } from "react";
import Card from "../../utils/Card";
import "./style.scss";

const CardSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="slider-container">
      <div className="card-slider" ref={sliderRef}>
        {[...Array(15)].map((_, index) => (
          <Card key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;

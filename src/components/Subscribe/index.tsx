import React from "react";
import MobileSettings from "../../assets/images/MobileSettings";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./style.scss";

const SubscribeSection = () => {
  return (
    <section className="subscribe-section">
      <div className="subscribe-content">
        <div className="heading">Subscribe</div>
        <div className="desc">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </div>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your Email Address" />

          <button
            className="subscribe-btn"
            onClick={() => alert("Subscribe Now")}
          >
            Subscribe Now
            <div className="icon">
              <ArrowRightIcon />
            </div>
          </button>
        </div>
      </div>

      <div className="subscribe-image">
        <MobileSettings />
      </div>
    </section>
  );
};

export default SubscribeSection;

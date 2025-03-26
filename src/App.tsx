import React from "react";
import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
import Carousel from "./components/Carousal";
import Exams from "./components/Exams";
import CardSlider from "./components/CardSlider";
import Footer from "./components/Footer";
import StatsSection from "./components/StatsSection";
import FAQ from "./components/FAQs";
import SubscribeSection from "./components/Subscribe";
import "./App.css";

function App() {
  return (
    <div id="educational-site-root-container">
      <Navbar />
      <Carousel />
      <Exams />
      <CardSlider />
      <StatsSection />
      <FAQ />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default App;

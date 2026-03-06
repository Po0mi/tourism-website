import { useRef, useEffect } from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <h1 className="top-title">FRONTEND</h1>

        <div className="middle-block">
          <h2 className="middle-title">PORTFOLIO</h2>
          <p className="hero-name">DAN GABRIELLE DE CASTRO</p>
        </div>

        <h1 className="bottom-title">DEVELOPER</h1>
      </div>
    </section>
  );
};

export default Hero;

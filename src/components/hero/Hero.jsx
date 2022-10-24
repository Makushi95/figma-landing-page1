import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-panelLeft">
        <h1>Build Your Business Connections</h1>
        <p>
          Connect with our business architects, build your network and
          improve lead generation all in one place.
        </p>
      </div>
      <div className="hero-panelRight">
        <div></div>
        <button>Check Availability</button>
      </div>
    </div>
  );
};

export default Hero;

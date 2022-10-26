import React, { useState } from "react";
import Calendar from "react-calendar";
import "./hero.css";

const Hero = () => {
  const [value, onChange] = useState(new Date());

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
        <div className="calendar">
          <Calendar onChange={onChange} value={value} />
        </div>
        <button>Check Availability</button>
      </div>
    </div>
  );
};

export default Hero;

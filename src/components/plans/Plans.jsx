import React from "react";
import "./plans.css";

import Collapsible from "../collapsible/Collapsible";

const Plans = () => {
  return (
    <div className="plans">
      <h2>Comfortable Plans For You</h2>
      <div className="container">
        <Collapsible />
        <Collapsible />
        <Collapsible />
      </div>
      <button>Learn More</button>
    </div>
  );
};

export default Plans;

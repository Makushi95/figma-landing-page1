import React from "react";
import "./improvement.css";

import improvementImg from "../../images/improvement.png";

const Improvement = () => {
  return (
    <div className="improvement">
      <div className="improvement-panelLeft">
        <img src={improvementImg} alt="improvement" />
      </div>
      <div className="improvement-panelRight">
        <h3>Improved Lead Generation</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
          massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
          sapien fringilla, mattis ligula consectetur, ultrices
          mauris. Maecenas vitae mattis tellus..
        </p>
      </div>
    </div>
  );
};

export default Improvement;

import React from "react";
import "./opinions.css";

import img1 from "../../images/Ellipse1.png";
import img2 from "../../images/Ellipse2.png";
import img3 from "../../images/Ellipse3.png";

const Opinions = () => {
  return (
    <div className="opinions">
      <h2>Trusted By The Industry</h2>
      <div className="opinionsPanels">
        <div className="opinions-panelLeft">
          <div className="topImage">
            <img src={img1} alt="" />
          </div>
          <p>
            Company was very helpful, helping me to connect with
            pottential prospects. I was able to signifficantly improve
            my business. As well as expand my network.
          </p>
          <h5>CEO of Bumble</h5>
        </div>
        <div className="opinions-panelMid">
          <div className="topImage">
            <img src={img2} alt="" />
          </div>
          <p>
            Company was very helpful, helping me to connect with
            pottential prospects. I was able to signifficantly improve
            my business. As well as expand my network.
          </p>
          <h5>CEO of Bumble</h5>
        </div>
        <div className="opinions-panelRight">
          <div className="topImage">
            <img src={img3} alt="" />
          </div>
          <p>
            Company was very helpful, helping me to connect with
            pottential prospects. I was able to signifficantly improve
            my business. As well as expand my network.
          </p>
          <h5>CEO of Bumble</h5>
        </div>
      </div>
      <button>Contact Us</button>
    </div>
  );
};

export default Opinions;

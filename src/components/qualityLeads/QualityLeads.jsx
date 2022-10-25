import React from "react";
import "./qualityLeads.css";
import profilesImg from "../../images/profiles.png";

const QualityLeads = () => {
  return (
    <div className="qualityLeads">
      <div className="quality-panelLeft">
        <h3>Quality Leads Equal Better ROI</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
          massa mi. Aliquam in hendrerit urna.
          <ul>
            <li>Pellentesque sit</li>
            <li>Amet sapien fringilla</li>
            <li>Mattis ligula consectetur</li>
            <li>Ultrices mauris</li>
            <li>Maecenas vitae mattis tellus.</li>
          </ul>
        </p>
      </div>
      <div className="quality-panelRight">
        <img src={profilesImg} alt="profiles" />
      </div>
    </div>
  );
};

export default QualityLeads;

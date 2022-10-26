import React from "react";
import useCollapse from "react-collapsed";
import "./collapsible.css";
import ellipseBlue from "../../images/EllipseBlue.png";
import ellipseCyan from "../../images/EllipseCyan.png";

function Collapsible() {
  const { getCollapseProps, getToggleProps, isExpanded } =
    useCollapse();
  const headerName = [
    { id: 0, text: "Starter" },
    { id: 1, text: "Pro" },
    { id: 2, text: "Enterprise" },
  ];
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        {isExpanded ? (
          <img src={ellipseCyan} />
        ) : (
          <img src={ellipseBlue} />
        )}
        <div {...getCollapseProps()}>
          <div className="content">
            <ul>
              <li>Emails</li>
              <li>CRM</li>
              <li>Pool of Lookups</li>
              <li>Shared Team Contacts</li>
              <li>Saleforce & Zapier Integration</li>
            </ul>
          </div>
        </div>
        <h2>Starter</h2>
        <p>$15</p>
      </div>
    </div>
  );
}

export default Collapsible;

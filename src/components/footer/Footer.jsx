import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="customerCare">
        <h5>Customer Care</h5>
        <p>Contact Us</p>
        <p>Canceling of Subscription</p>
        <p>Help and FAQ</p>
      </div>
      <div className="learn">
        <h5>Learn</h5>
        <p>About Us</p>
        <p>Careers</p>
        <p>Affiliate</p>
      </div>
      <div className="info">
        <h5>Legal Info</h5>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookie Policy</p>
      </div>
      <div className="container">
        <div className="mail">
          <h5>Let's Talk</h5>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <button type="submit">Submit</button>
        </div>
        <hr />
        <div className="copyright">
          <h5>Follow Us</h5>
          <h5>2022 All rights reserved</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;

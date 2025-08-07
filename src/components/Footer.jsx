import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <h5>
        Design & Developed by{" "}
        <span>
          <b>Aravind S</b>
        </span>
      </h5>
      <p>&copy;{year} All rights reserved.</p>
    </div>
  );
};

export default Footer;

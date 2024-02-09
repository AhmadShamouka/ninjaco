import React from "react";
import "./AboutBlock.css";

const AboutBlock = ({ icon, text, title, bgColor, textColor }) => {
  return (
    <div className={`flex center ${bgColor} ${textColor} about-block`}>
      <div className="about-icon">{icon}</div>
      <div className="about-title">
        <h1>{title}</h1>
      </div>
      <div className="about-text">
        <h5>{text}</h5>
      </div>
    </div>
  );
};

export default AboutBlock;

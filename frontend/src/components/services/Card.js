import React from "react";
import "./Card.css";

const Card = ({ title, subtxt, text, imageUrl }) => {
  return (
    <div className="card-wrapper">
      <div
        className="thumb"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="infos">
        <div className="title">
          <h2>{title}</h2>
          <h5>{subtxt}</h5>
        </div>
        <div className="txt">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

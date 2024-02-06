import React from "react";
import "./Button.css";

const Button = ({
  type,
  disabled,
  text,
  onClick,
  bgColor = "blue-bg",
  textColor = "white-text",
  logo,
}) => {
  return (
    <button
      className={`flex center  ${bgColor} ${textColor} base-button`}
      type={type}
      onClick={onClick}
    >
      {text}
      {logo}
    </button>
  );
};

export default Button;

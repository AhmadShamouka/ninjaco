import React from "react";
import "./Landing.css";
import Button from "../../components/button/Button";
const Landing = () => {
  return (
    <div>
      <section className="hero-container">
        <div className="hero-img">
          <h1>Learn coding and robotics with fun and easy code blocks.</h1>
          <Button
            text="Create your first project"
            bgColor="blue-bg"
            textColor="white-text"
          />
        </div>
      </section>
    </div>
  );
};

export default Landing;

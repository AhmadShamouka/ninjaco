import React from "react";
import "./Landing.css";
import Button from "../../components/button/Button";
import * as Unicons from "@iconscout/react-unicons";
import Navbar from "../../components/navbar/Navbar";
const Landing = () => {
  return (
    <div>
      <Navbar />
      <section className="hero-container flex center">
        <div className="hero-text">
          <h1>Learn coding and robotics with fun and easy code blocks.</h1>
          <Button
            text="Create your first project &nbsp;"
            bgColor="black-bg"
            textColor="white-text"
            logo={<Unicons.UilRobot size="25px" />}
          />
        </div>
        <div className="hero-img"></div>
      </section>
    </div>
  );
};

export default Landing;

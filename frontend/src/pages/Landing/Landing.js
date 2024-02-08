import React from "react";
import "./Landing.css";
import Button from "../../components/button/Button";
import {
  UilBackpack,
  UilRobot,
  UilCodeBranch,
  UilBuilding,
} from "@iconscout/react-unicons";
import Navbar from "../../components/navbar/Navbar";
const Landing = () => {
  return (
    <div>
      <Navbar />
      <section className="hero flex center">
        <div className="hero-container flex center">
          <div className="hero-text white-text">
            <h1>Learn coding and robotics with fun and easy code blocks.</h1>
            <Button
              text="Create your first project &nbsp;"
              bgColor="blue-bg"
              textColor="white-text"
              logo={<UilRobot size="25px" />}
            />
          </div>
          <div className="hero-img"></div>
        </div>
        <div className="hero-info flex center">
          <div className="hero-info-text flex center">
            <UilBackpack size="20%" className="color-1" />
            <div>
              <h2>2500+</h2>
              <h4>Students</h4>
            </div>
          </div>
          <div className="hero-info-text flex center">
            <UilBuilding size="20%" className="color-2" />
            <div>
              <h2>10+</h2>
              <h4>Schools</h4>
            </div>
          </div>
          <div className="hero-info-text flex center">
            <UilCodeBranch size="20%" className="color-3" />
            <div>
              <h2>30+</h2>
              <h4>Branches</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;

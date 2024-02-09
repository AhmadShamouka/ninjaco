import React from "react";
import "./Landing.css";
import Button from "../../components/button/Button";
import Particles from "react-tsparticles";
import {
  UilBackpack,
  UilRobot,
  UilCodeBranch,
  UilBuilding,
  UilLightbulbAlt,
  UilRocket,
  UilCompass,
} from "@iconscout/react-unicons";
import Navbar from "../../components/navbar/Navbar";
import AboutBlock from "../../components/about-us/AboutBlock";
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

      <section className="about-us flex center">
        <h1 className="blue-text">How We Make a Difference</h1>
        <div className="flex center">
          <AboutBlock
            bgColor="blue-bg"
            textColor="white-text"
            icon={<UilCompass size="100" />}
            title="Mission"
            text="To provide high-quality and affordable coding and robotics education to students of all ages and backgrounds."
          />
          <AboutBlock
            bgColor="orange-bg"
            textColor="white-text"
            icon={<UilRocket size="100" />}
            title="Vision"
            text=" To empower the next generation of innovators and leaders with the skills and confidence to create a better future."
          />
          <AboutBlock
            bgColor="blue-bg"
            textColor="white-text"
            icon={<UilLightbulbAlt size="100" />}
            title="Values"
            text="We value curiosity, creativity, collaboration, and excellence in everything we do."
          />
        </div>
      </section>
    </div>
  );
};

export default Landing;

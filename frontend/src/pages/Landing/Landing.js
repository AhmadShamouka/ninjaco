import React from "react";
import "./Landing.css";
import Button from "../../components/button/Button";
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
import Card from "../../components/services/Card";
import robo from "../../assets/images/robotscoding.jpeg";
import coding from "../../assets/images/coding.jpeg";
import workshop from "../../assets/images/ll.jpeg";
import fun from "../../assets/images/blockcoding.png";
const Landing = () => {
  return (
    <div>
      <Navbar />
      <section className="hero flex center">
        <div className="hero-container flex center">
          <div className="hero-text white-text">
            <h1>Learn coding and robotics with fun and easy code blocks.</h1>
            <h4>Join and discover the fun of coding your own adventures.</h4>
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
      <section className="services flex center">
        <h1 className="blue-text">Our Learning Universe</h1>
        <div className="services-cards flex column">
          <div className="flex center">
            <Card
              title="Interactive Lessons"
              subtxt="Engaging exploration across subjects."
              text="Join us for our Live Infinity Session in beautiful New York City. This is a 3 day intensive workshop where you'll learn how to become a better version of..."
              imageUrl={fun}
            />
            <Card
              title="Educational Games"
              subtxt="Fun-filled activities that reinforce knowledge."
              text="Join us for our Live Infinity Session in beautiful New York City. This is a 3 day intensive workshop where you'll learn how to become a better version of..."
              imageUrl={coding}
            />
          </div>
          <div className="flex center">
            <Card
              title="Safe and Secure Environment"
              subtxt="Expert guidance and support."
              text="Join us for our Live Infinity Session in beautiful New York City. This is a 3 day intensive workshop where you'll learn how to become a better version of..."
              imageUrl={robo}
            />
            <Card
              title="Live Tutoring Sessions"
              subtxt="Insightful tools for parents to track progress."
              text="Join us for our Live Infinity Session in beautiful New York City. This is a 3 day intensive workshop where you'll learn how to become a better version of..."
              imageUrl={workshop}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;

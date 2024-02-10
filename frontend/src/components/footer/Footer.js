import React from "react";
import footer from "../../assets/images/footer.jpeg";
import "./Footer.css";
import { UilFastMail, UilPhoneAlt } from "@iconscout/react-unicons";
import i from "../../assets/images/i.png";
import f from "../../assets/images/f.jpeg";
import l from "../../assets/images/l.jpeg";
import t from "../../assets/images/t.png";
import map from "../../assets/images/map.jpeg";
const Footer = () => {
  return (
    <section className="contact-us flex column">
      <div className="contact-us-container flex center">
        <div className="contact-us-text">
          <h2>LET'S KEEP IN TOUCH</h2>
          <p>
            Stay connected with us for the latest updates, tips, and<br></br>
            inspiration on all things education!
          </p>
        </div>
        <div className="contact-us-social flex">
          <div className="social-img flex center">
            <img src={f} />
            <img src={t} />
          </div>
          <div className="social-img flex center">
            <img src={l} />
            <img src={i} />
          </div>
        </div>
      </div>
      <div className="footer flex center">
        <div className="footer-img">
          <img src={footer} />
        </div>
        <div className="footer-text flex">
          <div className="map">
            <h2>WHERE WE ARE?</h2>
            <img src={map} />
          </div>
          <div className="c-num flex column">
            <h2>CONTACT US</h2>
            <div className="flex center">
              <UilPhoneAlt size="30" />
              <a>:+961 71464624</a>
            </div>
            <div className="flex center">
              <UilFastMail size="30" />
              <a>: ninjaco@ninjaco.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-container flex center">
        <div className="copyright">
          <p>Copyright 2022, NinjaCO</p>
        </div>
        <div className="description">
          <p>
            Sed diam nonummy nibh euismod tincidunt laoreet dolore magna aliquam
            erat volutpat.
          </p>
        </div>
        <div className="credits">
          <p className="link">
            Design and coding by
            <a target="_blank" rel="nofollow noopener" href="%">
              Responsee Team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

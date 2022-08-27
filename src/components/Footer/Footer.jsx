import React, { useEffect } from "react";
import "./Footer.css";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

function Footer() {
  useEffect(() => {
    const handleToggle = () => {
      var current = document.getElementsByClassName("ba-card-hover");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(
          "ba-card-hover",
          ""
        );
      }
    };

    const onMouseOver = (el) => {
      handleToggle();
      el.classList.toggle("ba-card-hover");
    };
    const onMouseOut = () => handleToggle();
    document.querySelectorAll(".skill-card").forEach((el) => {
      el?.addEventListener("mouseover", () => onMouseOver(el));
      el?.addEventListener("mouseout", onMouseOut);
    });
  }, []);

  return (
    <div className="Footer">
      <div className="Footer-container">
        <div className="footer">
          <div className="socials">
            <a
              target="_blank"
              href="https://www.instagram.com/koders_in/"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
            <a
              rel="noreferrer"
              href="https://www.facebook.com/kodersindia"
              target="_blank"
            >
              <BsFacebook />
            </a>
            <a
              rel="noreferrer"
              href="https://twitter.com/KodersHQ"
              target="_blank"
            >
              <BsTwitter />
            </a>
            <a
              rel="noreferrer"
              href="https://github.com/koders-in"
              target="_blank"
            >
              <BsGithub />
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/company/koders-in/mycompany/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </div>
          <div id="bottom-anime" className="bottom-anime">
            <div className="ba-rectangle-1 ba-card skill-card">
              <h1 style={{ color: "#0f1830" }} className="skill1">
                Web Applications
              </h1>
            </div>
            <div className="ba-rectangle-2 ba-card-back skill-card">
              <h1 style={{ color: "#0f1830" }} className="skill2">
                Software Development
              </h1>
            </div>
            <div className="ba-rectangle-3 ba-card skill-card">
              <h1 style={{ color: "#17c3b7" }} className="skill3">
                Android Applications
              </h1>
            </div>
            <div className="ba-rectangle-4 ba-card skill-card">
              <h1 style={{ color: "#0f1830" }} className="skill4">
                Desktop Applications
              </h1>
            </div>
            <div className="ba-rectangle-5 ba-card-back skill-card">
              <h1 style={{ color: "#0f1830" }} className="skill5">
                Discord Bots
              </h1>
            </div>
            <div className="ba-rectangle-6 ba-card skill-card">
              <h1 style={{ color: "#17c3b7" }} className="skill6">
                Automated Toolbots and Monitors
              </h1>
            </div>
          </div>
          <div className="right-text">
            <a rel="noreferrer" href="https://koders.in/#/" target="_blank">
              www.koders.in
            </a>
            <small>Copyright ©2022 | All rights reserved</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

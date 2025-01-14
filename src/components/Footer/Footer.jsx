// Optimized Footer.jsx
import React from "react";
import "./Footer.scss";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

function Footer() {
  const socialLinks = [
    {
      href: "https://twitter.com/KodersHQ",
      label: "Follow us on Twitter",
      icon: <BsTwitter />,
    },
    {
      href: "https://github.com/koders-in",
      label: "Visit our GitHub profile",
      icon: <BsGithub />,
    },
    {
      href: "https://www.linkedin.com/company/koders-in/mycompany/",
      label: "Connect with us on LinkedIn",
      icon: <BsLinkedin />,
    },
    {
      href: "https://www.instagram.com/koders_in/",
      label: "Follow us on Instagram",
      icon: <BsInstagram />,
    },
    {
      href: "https://www.facebook.com/kodersindia",
      label: "Follow us on Facebook",
      icon: <BsFacebook />,
    },
  ];

  return (
    <div className="Footer">
      <div className="Footer-container">
        <div className="footer">
          <div className="socials">
            {socialLinks.map(({ href, label, icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
          <div id="bottom-anime" className="bottom-anime">
            <div className="ba-rectangle-1 ba-card skill-card">
              <h1 className="skill skill1">Web Applications</h1>
            </div>
            <div className="ba-rectangle-2 ba-card-back">
              <h1 className="skill skill2">Software Development</h1>
            </div>
            <div className="ba-rectangle-3 ba-card skill-card">
              <h1 className="skill skill3">Android Applications</h1>
            </div>
            <div className="ba-rectangle-4 ba-card skill-card">
              <h1 className="skill skill4">Desktop Applications</h1>
            </div>
            <div className="ba-rectangle-5 ba-card-back">
              <h1 className="skill skill5">Discord Bots</h1>
            </div>
            <div className="ba-rectangle-6 ba-card skill-card">
              <h1 className="skill skill6">Automated Toolbots and Monitors</h1>
            </div>
          </div>
          <div className="right-text">
            <a href="https://koders.in/#/" target="_blank" rel="noreferrer">
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

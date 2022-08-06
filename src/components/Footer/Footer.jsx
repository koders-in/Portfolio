import React from "react";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className="Footer">
    <div className="Footer-container">
        <div className="footer">
      <div className="socials">
        <a href="">
          <BsInstagram />
        </a>
        <a href="https://www.facebook.com/kodersindia" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://twitter.com/KodersHQ" target="_blank">
          <BsTwitter />
        </a>
        <a href="https://github.com/koders-in" target="_blank">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/company/koders-in/mycompany/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
      <div className="bottom-anime">
        <div className="ba-rectangle-1 ba-card" onMouseOver={() => {
          document.querySelector('.skill1').style.display = "block";
        }} onMouseOut={() => {
          document.querySelector('.skill1').style.display = "none";
        }}>
          <h1 style={{color: "#0f1830"}} className="skill1">Web Applications</h1>
        </div>
        <div className="ba-rectangle-2 ba-card-back">
          <h1 style={{color: "#0f1830"}} className="skill2">Software Development</h1>
        </div>
        <div className="ba-rectangle-3 ba-card" onMouseOver={() => {
          document.querySelector('.skill3').style.display = "block";
        }} onMouseOut={() => {
          document.querySelector('.skill3').style.display = "none";
        }}>
        <h1 style={{color: "#17c3b7"}} className="skill3">Android Applications</h1>
          
        </div>
        <div className="ba-rectangle-4 ba-card" onMouseOver={() => {
          document.querySelector('.skill4').style.display = "block";
        }} onMouseOut={() => {
          document.querySelector('.skill4').style.display = "none";
        }}>
        <h1 style={{color: "#0f1830"}} className="skill4">Desktop Applications</h1>
        </div>
        <div className="ba-rectangle-5 ba-card-back">
          <h1 style={{color: "#0f1830"}} className="skill5">Discord Bots</h1>
        </div>
        <div className="ba-rectangle-6 ba-card" onMouseOver={() => {
          document.querySelector('.skill6').style.display = "block";
        }} onMouseOut={() => {
          document.querySelector('.skill6').style.display = "none";
        }}>
          <h1 style={{color: "#17c3b7"}} className="skill6">Automated Toolbots and Monitors</h1>
        </div>
      </div>
      <div className="right-text">
        <a href="https://koders.in/#/" target="_blank">
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

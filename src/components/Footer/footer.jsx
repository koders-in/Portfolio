import React from "react";
import "./Footer.css";
import { BsInstagram, BsLink } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import AOS from "aos";
function Footer() {
  AOS.init();
  return (
    <div className="Footer">
      <div className="footer-link" data-aos="fade-up" data-aos-delay="200">
        <a href="https://koders.in/#/" target="_blank">
          www.koders.in
        </a>
      </div>
      <div className="footer-bottom">
        <div className="social-links" data-aos="fade-right" data-aos-delay="200">
          <a href="">
            <BsInstagram />
          </a>
          <a href="https://www.facebook.com/kodersindia/" target="_blank">
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
        <div className="footer-bottom">
            <div className="social-links">
            <a href=""><BsInstagram /></a>
            <a href=""><BsFacebook /></a>
            <a href=""><BsTwitter /></a>
            <a href=""><BsGithub /></a>
            <a href=""><BsLinkedin /></a>
            </div>
            <div className="bottom-anime">
                {/* <img src="/bottom-anime-1.png" alt="" /> */}
                <div className="ba-rectangle-1"></div>
            </div>
            <div className="copyright">
                <p>Made with ❤️ by Koders</p>
                <small>Copyright ©2022 | All rights reserved</small>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Footer;

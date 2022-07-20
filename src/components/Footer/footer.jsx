import React from "react";
import "./Footer.css";
import { BsInstagram} from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import AOS from "aos";

function Footer() {
  AOS.init(
    {
      once:true
    }
  );
  return (
    <div className="Footer">
      <div className="footer-link" data-aos="fade-up" >
        <a href="https://koders.in/#/" target="_blank">
          www.koders.in
        </a>
      </div>
      <div className="footer-bottom">
        <div className="social-links"
        // data-aos="fade-right" data-aos-delay="100"
        >
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
            {/* <img src="/bottom-anime-1.png" alt="" /> */}
            <div className="ba-rectangle-1 ba-card"></div>
            <div className="ba-rectangle-2 ba-card"></div>
            <div className="ba-rectangle-3 ba-card"></div>
            <div className="ba-rectangle-4 ba-card"></div>
            <div className="ba-rectangle-5 ba-card"></div>
            <div className="ba-rectangle-6 ba-card"></div>
          </div>
          <div className="copyright">
            <small>Copyright ©2022 | All rights reserved</small>
          </div>
        </div>
      </div>
  );
}

export default Footer;

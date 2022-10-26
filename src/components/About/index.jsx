import React from "react";
import "./style.scss";
import CountUp from "react-countup";
import aboutTopMidCube from "../../assets/about-top-mid-cube.svg";
import animeImg5 from "../../assets/anime-img-5.svg";
import laptop from "../../assets/laptop.png";
import icon1 from "../../assets/about-icon-1.svg";
import icon2 from "../../assets/about-icon-2.svg";
import icon3 from "../../assets/about-icon-3.png";
import AOS from "aos";

const about = () => {
  AOS.init({
    once: true,
  });
  return (
    <div className="about" id="about-id">
      <img src={aboutTopMidCube} alt="" className="atmc" />
      <div className="main-container">
        <div
          className="left-container"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img src={animeImg5} alt="" className="tilt-1" />
          <img src={laptop} alt="" className="laptop" />
        </div>
        <div
          className="right-container"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="about-child first">
            <img src={icon1} alt="" className="about-icons" />
            <div className="child-text-1">
              <span>
                <CountUp end={450} duration={0.8} enableScrollSpy={true} />
              </span>
              <p>Clients</p>
            </div>
          </div>
          <div className="about-child second">
            <img src={icon2} alt="" className="about-icons" />
            <div className="child-text-2">
              <span>
                <CountUp end={890} duration={1} enableScrollSpy={true} />
              </span>
              <p>Project Done</p>
            </div>
          </div>
          <div className="about-child third">
            <img src={icon3} alt="" className="about-icons" />
            <div className="child-text-3">
              <span>
                <CountUp end={1000} duration={1.5} enableScrollSpy={true} />
              </span>
              <p>Cups Of Coffee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;

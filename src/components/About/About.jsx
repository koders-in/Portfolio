import React from "react";
import "./About.scss";
import CountUp from "react-countup";
import aboutTopMidCube from "../../assets/about-top-mid-cube.svg";
import laptop from "../../assets/laptop.webp";
import icon1 from "/satisfy.webp";
import icon2 from "/about-projects.webp";
import icon3 from "/countries.webp";
import AOS from "aos";

const About = () => {
  React.useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const aboutData = [
    { icon: icon1, text: "Clients", value: 50 },
    { icon: icon2, text: "Projects Done", value: 260 },
    { icon: icon3, text: "Countries", value: 18 },
  ];

  return (
    <div className="about" id="about-id">
      <img src={aboutTopMidCube} alt="Decorative Cube" className="about-top-cube" />
      <div className="about-container">
        <div className="about-container-sec1" data-aos="fade-right" data-aos-delay="200">
          <img src={laptop} alt="Laptop" className="laptop" />
        </div>
        <div className="about-container-sec2" data-aos="fade-left" data-aos-delay="200">
          {aboutData.map((item, index) => (
            <div key={index} className="about-box">
              <img src={item.icon} alt={item.text} />
              <div>
                <div className="stats">
                  <CountUp end={item.value} duration={0.8} />
                  <span className="plus-icon">+</span>
                </div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

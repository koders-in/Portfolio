import React from "react";
import "./About.scss";
import CountUp from "react-countup";
import aboutTopMidCube from "../../assets/about-top-mid-cube.svg";
import laptop from "../../assets/laptop.svg";
import icon1 from "../../assets/clients.svg";
import icon2 from "../../assets/about-project.svg";
import icon3 from "../../assets/countries.svg";
import AOS from "aos";

const about = () => {
  AOS.init({
    once: true,
  });

  const abourData = [
    { icon: icon1, text: "Clients", value: 50 },
    { icon: icon2, text: "Projects Done", value: 260 },
    { icon: icon3, text: "Countries", value: 18 },
  ];
  return (
    <div className="about" id="about-id">
      <img src={aboutTopMidCube} alt="" className="about-top-cube" />
      <div className="about-container">
        <div
          className="about-container-sec1"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img src={laptop} alt="" className="laptop" />
        </div>
        <div
          className="about-container-sec2"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          {abourData.map((item, i) => {
            return (
              <div key={i} className="about-box">
                <img
                  src={item.icon}
                  alt={item.icon}
                  // style={i === 0 ? { height: "6rem" } : {}}
                />
                <div>
                  <CountUp
                    className=""
                    end={item.value}
                    duration={0.8}
                    enableScrollSpy={true}
                  />
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default about;

import React from "react";
import "./TitlePage.scss";
import logo from "../../assets/logo.png";
import topRightCube from "../../assets/tp-top-right-cube.svg";
import midTopCenterCube from "../../assets/tp-mid-top-cube.svg";
import arrowBig from "../../assets/arrow-3d1.svg";
import animeImg1 from "../../assets/anime-img-1.webp";
import animeImg2 from "../../assets/anime-img-2.svg";
import animeImg3 from "../../assets/anime-img-3.svg";
import hiddenCube2 from "../../assets/hidden-by-img-2-anime.svg";
import hiddenCube1 from "../../assets/hidden-by-img-1-anime.svg";
import bottomLeftCube from "../../assets/tp-top-right-cube.svg";
import bottomRightCube from "../../assets/tp-bottom-right-cube.svg";
import animeImg5 from "../../assets/anime-img-5.svg";

import sd1 from "../../assets/not-visible-sd.svg";
import sd2 from "../../assets/light-sd.svg";
import sd3 from "../../assets/dark-sd.svg";
import TypeWriter from "typewriter-effect";
import AOS from "aos";

const titlePage = () => {
  AOS.init({
    once: true,
  });

  return (
    <div className="titlePage">
      <div className="header">
        <img src={logo} alt="" className="logo" />
        <img src={topRightCube} alt="" className="header-img" rel="preload"/>
      </div>
      <img src={midTopCenterCube} alt="" className="img-3" rel="preload"/> {/* cube one */}
      <img src={bottomLeftCube} alt="" className="blc" rel="preload"/>
      <img src={hiddenCube1} alt="" className="hc-1" rel="preload"/> {/*cube in bg */}
      <img src={hiddenCube2} alt="" className="hc-2" rel="preload"/>
      <img src={bottomRightCube} alt="" className="brc" />
      <div className="title-sec">
        <div className="title-sec1">
          <img src={arrowBig} alt="" className="arrow-img" rel="preload"/>
          <h2>
            <span> TRUSTED BY&nbsp;</span>
            <span className="text-green">
              <TypeWriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("INDIAN ARMY")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("GERMAN GOVT")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("THE BEST")
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
                }}
              />
            </span>
          </h2>
          <h4 className="text-green">Infrastructure for high quality apps</h4>
          <p>
            Supercharge your business with latest technology, industry level
            standards and stable applications
          </p>
        </div>
        <div className="title-sec2">
          <img src={animeImg1} alt="" className="" rel="preload"/>
          <img src={animeImg2} alt="" className="title-sec2-img1" rel="preload"/>
          <img src={animeImg3} alt="" className="title-sec2-img2" rel="preload"/>
          <img src={animeImg5} alt="" className="title-sec2-img3" rel="preload"/>
        </div>
      </div>
      <div className="down-btn">
        <a href="#about-id">
          <img src={sd1} alt="" rel="preload"/>
          <img src={sd2} alt="" rel="preload"/>
          <img src={sd3} alt="" rel="preload"/>
        </a>
      </div>
    </div>
  );
};

export default titlePage;
import React, { useState, useEffect } from "react";
import "./TitlePage.scss";
import logo from "../../assets/logo.png";
import topRightCube from "../../assets/tp-top-right-cube.svg";
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
import AOS from "aos";

const texts = ["INDIAN ARMY", "GERMAN GOVT", "THE BEST"];

const TitlePage = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="titlePage">
      <div className="header">
        <img src={logo} alt="Koders Logo" className="logo" />
        <img src={topRightCube} alt="Decorative Cube" className="header-img" />
      </div>
      <img src={bottomLeftCube} alt="Bottom Left Cube" className="blc" />
      <img src={hiddenCube1} alt="Hidden Cube 1" className="hc-1" />
      <img src={hiddenCube2} alt="Hidden Cube 2" className="hc-2" />
      <img src={bottomRightCube} alt="Bottom Right Cube" className="brc" />
      <div className="title-sec">
        <div className="title-sec1">
          <img src={arrowBig} alt="Arrow Graphic" className="arrow-img" />
          <h2>
            <span className="trusted-by">TRUSTED BY&nbsp;</span>
            <div className="combined-container">
              <h1 className="combined-text" key={currentTextIndex}>
                {texts[currentTextIndex]}
              </h1>
            </div>
          </h2>
          <h4 className="text-green">Infrastructure for high quality apps</h4>
          <p>
            Supercharge your business with the latest technology, industry-level
            standards, and stable applications.
          </p>
        </div>
        <div className="title-sec2">
          <img src={animeImg1} alt="Anime Graphic 1" decoding="async" />
          <img src={animeImg2} alt="Anime Graphic 2" className="title-sec2-img1" loading="lazy" />
          <img src={animeImg3} alt="Anime Graphic 3" className="title-sec2-img2" loading="lazy" />
          <img src={animeImg5} alt="Anime Graphic 5" className="title-sec2-img3" loading="lazy" />
        </div>
      </div>
      <div className="down-btn">
        <a href="#about-id">
          <img src={sd1} alt="Scroll Down Icon 1" />
          <img src={sd2} alt="Scroll Down Icon 2" />
          <img src={sd3} alt="Scroll Down Icon 3" />
        </a>
      </div>
    </div>
  );
};

export default TitlePage;

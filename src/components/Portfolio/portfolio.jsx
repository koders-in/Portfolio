import React from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./Portfolio.scss";
import { desktopAppImagesData, desktopAppImagesData2, mobileAppImagesData, mobileAppImagesData2 } from "../../helper/helper";
import { useState } from "react";

function Portfolio() {
  const [desktopAppImages, setDesktopAppImages] = useState([...desktopAppImagesData]);
  const [mobileAppImages, setMobileAppImages] = useState([...mobileAppImagesData]);
  const handleClick = () => {
    setDesktopAppImages((p) => [...p, ...desktopAppImagesData2]);
    setMobileAppImages((p) => [...p, ...mobileAppImagesData2]);
    document.querySelector(".portfolio-btn").style.display = "none";
  };

  return (
    <div className="Portfolio">
      <div className="portfolio-header">
        <h1>Portfolio</h1>
        <h4>AUTOMATION: Rules the Roost</h4>
        <p>
          Automation is made easier with Koders. Take a look at the various
          projects we've completed
        </p>
      </div>
      <div className="portfolio-cards">
        {desktopAppImages.map((item) => (
          <PortfolioCard
            key={item.title}
            hidden={item.hidden}
            imgSrc={item.imgSrc}
            delay={item.delay}
            classTitle={item.classTitle}
            position={item.position}
            techStack={item.techStack}
            title={item.title}
            isMobile={item?.isMobile}
          />
        ))}
      </div>
      <div style={{ height: "3rem" }}></div>
      <div className="portfolio-cards">
        {mobileAppImages.map((item) => (
          <PortfolioCard
            key={item.title}
            hidden={item.hidden}
            imgSrc={item.imgSrc}
            delay={item.delay}
            classTitle={item.classTitle}
            position={item.position}
            techStack={item.techStack}
            title={item.title}
            isMobile={item?.isMobile}
          />
        ))}
      </div>
      <button className="portfolio-btn" onClick={handleClick}>
        view all
      </button>
    </div>
  );
}

export default Portfolio;

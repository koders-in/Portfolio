import React from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./Portfolio.scss";
import { arr, arr2, mobileAppOne, mobileAppTwo } from "../../helper/helper";
import { useState } from "react";

function Portfolio() {
  const [data, setData] = useState([...arr]);
  const [mobileApp, setMobileApp] = useState([...mobileAppOne]);
  const handleClick = () => {
    setData((p) => [...p, ...arr2]);
    setMobileApp((p) => [...p, ...mobileAppTwo]);
    document.querySelector(".portfolio-btn").style.display = "none";
  };

  return (
    <div className="Portfolio">
      <div className="portfolio-header">
        <h1>PORTFOLIO</h1>
        <h4>AUTOMATION: Rules the Roost</h4>
        <p>
          Automation is made easier with Koders. Take a look at the various
          projects we've completed
        </p>
      </div>
      <div className="portfolio-cards">
        {data.map((item) => (
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
      {/* ---------- */}
      <div className="portfolio-cards">
        {mobileApp.map((item) => (
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

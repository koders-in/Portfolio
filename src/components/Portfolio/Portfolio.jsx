import React from "react";
import { PortfolioCard } from "../../components";
import "./Portfolio.css";
import { arr, arr2 } from "../../helper";
import { useState } from "react";

function Portfolio() {
  const [data, setData] = useState([...arr]);
  const handleClick = () => {
    setData((p) => [...p, ...arr2]);
    // document.querySelectorAll(".hidden").forEach((item) => {
    //   item.classList.remove("hidden");
    // });
    document.querySelector(".portfolio-btn").style.display = "none";
  };

  return (
    <div className="Portfolio">
      <div className="portfolio-header">
        <h1>PORTFOLIO</h1>
        <h4>AUTOMATION: Rules the Roost</h4>
        <p>
          Automation is made easier with Koders. Take a look at the various
          projects we’ve done
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

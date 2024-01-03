import React from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./Portfolio.scss";
import { arr, arr2, mobileAppOne, mobileAppTwo } from "../../helper/helper";
import dotSmall from "../../assets/dot-small.svg";
import { useEffect, useState } from "react";

function Portfolio() {
  const [data, setData] = useState([...arr]);
  const [currentCard, setCurrentCard] = useState("All");
  const [mobileApp, setMobileApp] = useState([...mobileAppOne]);
  const handleClick = () => {
    setData((p) => [...p, ...arr2]);
    setMobileApp((p) => [...p, ...mobileAppTwo]);
    document.querySelector(".portfolio-viewmore-btn").style.display = "none";
  };

  const handleBtns = (e) => {
    let word = e.target.value;
    setCurrentCard(word);
  };

  const allSizeElements = document.querySelectorAll(".btn");
  for (let i = 0; i < allSizeElements.length; i++) {
    allSizeElements[i].addEventListener("click", function (event) {
      var prev = document.querySelector(".active");
      if (prev) prev.classList.remove("active");
      event.target.classList.add("active");
    });
  }

  useEffect(() => {
    if (currentCard === "All") {
      setData(arr);
      document.querySelector(".portfolio-viewmore-btn").style.display =
        " inline";
    } else {
      var arrs = [...arr, ...arr2];
      const filtered = arrs.filter((data) => {
        return (
          data.Category === currentCard || data.Category.includes(currentCard)
        );
      });

      setData(filtered);
    }
  }, [currentCard]);

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

      <div className="portfolio-nav">
        <section className="nav-items" id="nav">
          <button
            className="btn active"
            onClick={handleBtns}
            type="button"
            value="All"
          >
            All
          </button>
          <button
            className="btn"
            onClick={handleBtns}
            type="button"
            value="Mobile"
          >
            Mobile Apps
          </button>
          <button
            className="btn"
            onClick={handleBtns}
            type="button"
            value="Desktop"
          >
            Desktop Apps
          </button>
          <button
            className="btn"
            onClick={handleBtns}
            type="button"
            value="Web"
          >
            Websites
          </button>
          <button className="btn" onClick={handleBtns} type="button" value="UI">
            UI/UX
          </button>
        </section>
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
            imgIcon={item.imgIcon}
            Description={item.Description}
            imgBg={item.imgBg}
            title={item.title}
            isMobile={item?.isMobile}
            logo={item.logo}
            Category={item.Category}
            dd={item.dd}
          />
        ))}
      </div>

      <div className="portfolio-buttons">
        <button className="portfolio-viewmore-btn" onClick={handleClick}>
          view more
        </button>
        <div className="startNewProject">
          <a
            className="startNewProject-btn"
            href="https://koders.in/start-project"
            target="_blank"
          >
            <svg
              className="rotatingText"
              viewBox="0 0 200 200"
              width="165"
              height="165"
            >
              <defs>
                <path
                  id="circle"
                  d="M 100, 100
                m -75, 0
                a 75, 75 0 1, 0 150, 0
                a 75, 75 0 1, 0 -150, 0
                "
                ></path>
              </defs>
              <text width="400">
                <textPath
                  alignmentBaseline="top"
                  xlinkHref="#circle"
                  className="startNewProjectText"
                >
                  Start A Project With US
                </textPath>
              </text>
              <image
                xlinkHref={dotSmall}
                x="75"
                y="75"
                height="50px"
                width="50px"
                className="startNewProject-dotSmall"
              ></image>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

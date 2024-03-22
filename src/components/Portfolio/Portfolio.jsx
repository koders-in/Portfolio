import React from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./Portfolio.scss";
import dotSmall from "../../assets/dot-small.svg";
import { useEffect, useState } from "react";
import axios from "axios";
function Portfolio() {
  const [extractedDataArray, setExtractedDataArray] = useState([]);
  const [currentCard, setCurrentCard] = useState("All");
  const [portfolioData, setPortfolioData] = useState([]);
  const base_url = "https://strapi.koders.in";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://strapi.koders.in/api/koders-projects?populate=*"
        );
        setPortfolioData(response.data.data);
      } catch (error) {
        console.error("Error fetching data from Strapi:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (portfolioData.length > 0) {
      const DataArray = portfolioData?.map((jsonData) => ({
        imageSrc: jsonData.attributes.imageSrc.data.map(
          (image) => `${base_url}${image.attributes.url}`
        ),

        imageBg: jsonData.attributes.imageBg.data.map(
          (image) => `${base_url}${image.attributes.url}`
        ),
        imageIcon: jsonData.attributes.imageIcon.data.map(
          (image) => `${base_url}${image.attributes.url}`
        ),
        logo: jsonData.attributes.logo.data.map(
          (image) => `${base_url}${image.attributes.url}`
        ),
        id: jsonData.id,
        title: jsonData.attributes.title,
        classTitle: jsonData.attributes.classTitle,
        delay: jsonData.attributes.delay,
        hidden: jsonData.attributes.hidden,
        isMobile: jsonData.attributes.isMobile,
        techStack: jsonData.attributes.techStack,
        position: jsonData.attributes.position,
        category: jsonData.attributes.category,
        nts: jsonData.attributes.nts,
        description: jsonData.attributes.description,
      }));

      console.log(DataArray);
      setExtractedDataArray(DataArray);
    }
  }, [portfolioData]);
  const handleClick = () => {
    setData((p) => [
      ...p,
      ...extractedDataArray.slice(6, extractedDataArray.length),
    ]);
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
      setData(extractedDataArray.slice(0, 6));
      document.querySelector(".portfolio-viewmore-btn").style.display =
        " inline";
    } else {
      const filtered = extractedDataArray.filter((item) => {
        return item.category && item.category === currentCard;
      });

      document.querySelector(".portfolio-viewmore-btn").style.display = "none";
      setData(filtered);
    }
  }, [currentCard, extractedDataArray]);

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
        {data &&
          data.map((item) => {
            if (
              item &&
              Array.isArray(item.imageSrc) &&
              Array.isArray(item.imageIcon)
            ) {
              const renderedPortfolioCard = (
                <PortfolioCard
                  key={item.title}
                  hidden={item.hidden}
                  imgSrc={item.imageSrc}
                  delay={item.delay}
                  classTitle={item.classTitle}
                  position={item.position}
                  techStack={item.techStack}
                  imgIcon={item.imageIcon}
                  Description={item.description}
                  imgBg={item.imageBg}
                  title={item.title}
                  isMobile={item.isMobile}
                  logo={item.logo}
                  Category={item.category}
                  nTs={item.nts}
                />
              );

              return renderedPortfolioCard;
            } else {
              console.warn(
                "imgSrc or imgIcon is undefined or null for item:",
                item
              );
              return null;
            }
          })}
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
            rel="noreferrer"
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

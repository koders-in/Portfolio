import React, { useContext, useState } from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./Portfolio.scss";
import dotSmall from "../../assets/dot-small.svg";
import { PortfolioContext } from "../../context/context";
import ClipLoader from "react-spinners/ClipLoader";

function Portfolio() {
  const [currentCategory, setCurrentCategory] = useState("All");
  const { data, loading, error } = useContext(PortfolioContext);
  const [showMore, setShowMore] = useState(false);

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const filteredData =
    currentCategory === "All"
      ? data
      : data.filter(
          (item) =>
            item.category?.toLowerCase() === currentCategory.toLowerCase()
        );

  const displayedData = showMore ? filteredData : filteredData.slice(0, 6);

  if (loading) {
    return (
      <div className="loading-container">
        <ClipLoader color="#36d7b7" loading={loading} size={50} />
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="Portfolio" data-aos="zoom-in" data-aos-delay="1000" loading="lazy">
      <div className="portfolio-header">
        <h1>PORTFOLIO</h1>
        <h4>
          AUTOMATION: <span>Rules the Roost</span>
        </h4>
        <p>
          Automation is made easier with Koders. Take a look at the various
          projects we've completed.
        </p>
      </div>
      <div className="portfolio-nav">
        <section className="nav-items">
          {["All", "Mobile", "Desktop", "Web", "UI", "Discord Bots", "DevOps"].map(
            (category) => (
              <button
                key={category}
                className={`btn ${
                  currentCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            )
          )}
        </section>
      </div>
      <div className="portfolio-cards" data-aos="flip-left">
        {displayedData.length > 0 ? (
          displayedData.map((item) => (
            <PortfolioCard
              key={item.id}
              imgSrc={item.imageSrc}
              delay={item.delay}
              classTitle={item.classTitle}
              hidden={item.hidden}
              techStack={item.techStack}
              Description={item.description}
              imgBg={item.imageBg}
              imgIcon={item.imageIcon}
              logo={item.logo}
              Category={item.category}
              title={item.title}
            />
          ))
        ) : (
          <p className="no-data-message">No projects available in this category.</p>
        )}
      </div>
      {filteredData.length > 6 && (
        <div className="button-container">
          <button onClick={toggleShowMore} className="toggle-button">
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      )}
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
                a 75, 75 0 1, 0 -150, 0"
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
  );
}

export default Portfolio;

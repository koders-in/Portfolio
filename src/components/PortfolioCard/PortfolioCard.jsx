import React, { useState, useEffect } from "react";
import "./PortfolioCard.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function PortfolioCard({
  imgSrc = [],
  title,
  Description,
  techStack = [],
  imgBg,
  imgIcon,
  hidden = false,
  delay = 100,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (imgSrc.length > 0) {
      const interval = setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % imgSrc.length);
      }, 2000);
      return () => clearTimeout(interval);
    }
  }, [currentSlide, imgSrc.length]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <a
      // href={`/portfolio/${title}`}
      className={`PortfolioCard ${hidden ? "hidden" : ""}`}
      data-aos="flip-left"
      data-aos-delay={delay}
      style={{ cursor: "pointer" }}
    >
      <div className="slider-container">
        {imgSrc && imgSrc.length > 0 ? (
          <div className="slider-item">
            <img
              alt={`Slide ${currentSlide + 1} for ${title}`}
              src={`https://strapi.koders.in${
                imgSrc[currentSlide]?.formats?.large?.url ||
                imgSrc[currentSlide]?.formats?.medium?.url ||
                imgSrc[currentSlide]?.formats?.small?.url ||
                imgSrc[currentSlide]?.formats?.thumbnail?.url ||
                imgSrc[currentSlide]?.url
              }`}
              className="carousel-image"
              loading="lazy"
            />
          </div>
        ) : (
          <p className="no-images-message">No images available</p>
        )}
      </div>
      <div
        className="card-background"
        style={{
          backgroundImage: `url(${imgBg?.url ? `https://strapi.koders.in${imgBg.url}` : ""})`,
        }}
      ></div>
      <div className="overlay">
        <div className="card-content">
          <div className="bottomContent" data-aos="zoom-in">
            <h4 className="portfolio-title">{title}</h4>
            <p className="portfolio-description">{Description}</p>
            <ul className="tech-stack">
              {techStack.map((tech, index) => {
                const icon = `https://strapi.koders.in${imgIcon?.[index]?.url}`;
                return (
                  <li key={index}>
                    {icon ? (
                      <svg width="40" height="40">
                        <image href={icon} />
                      </svg>
                    ) : (
                      <span>{tech}</span>
                    )}
                  </li>
                );
              })}
            </ul>
            {/* <div className="read-more-wrapper">
                {
                  <button
                    className="read-more-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigate();
                    }}
                    aria-label={`Read more about ${title}`}
                  >
                    Read More
                  </button>
                }
              </div> */}
          </div>
        </div>
      </div>
    </a>
  );
}

export default PortfolioCard;

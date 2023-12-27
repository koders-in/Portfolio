import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import "./PortfolioCard.scss";
import AOS from "aos";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoElectron } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { useEffect } from "react";

function PortfolioCard({
  imgSrc,
  delay,
  classTitle,
  title,
  position,
  hidden,
  techStack,
  isMobile,
  Description,
  imgBg,
  imgIcon,
  logo,
  Category,
}) {
  const [idx, setIdx] = useState(0);
  let hiddenClass = "";
  let bg = imgBg;

  const [showDetails, setShowDetails] = useState(false);
  let iconStyles = {
    color: "#00ffff",
    fontSize: "1.5em",
    paddingRight: "0.3em",
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (showDetails) {
      document.querySelector(`.${classTitle}`).style.display = "none";
    } else {
      document.querySelector(`.${classTitle}`).style.display = "flex";
    }
    setShowDetails(!showDetails);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (idx >= imgSrc.length - 1) {
      setIdx(0);
    } else {
      setIdx((prevIdx) => prevIdx + 1);
    }
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if (idx === 0) {
      setIdx(imgSrc.length - 1);
    } else {
      setIdx((prevIdx) => prevIdx - 1);
    }
  };

  if (hidden) {
    hiddenClass = "hidden";
  }

  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      className={"PortfolioCard " + hiddenClass}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <button className="next" onClick={handleNext}>
        &#x1F862;
      </button>
      <button className="prev" onClick={handlePrev}>
        &#x1F860;
      </button>

      <div
        className={"portfolio-card-container"}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className={"portfolio-class-title"}>{classTitle}</div>
        <svg width="30" height="30" className="project-logo">
          <image xlinkHref={logo} height="30" width="30" />
        </svg>
        {/* <div className={"details " + classTitle}>
          <h1>{title}</h1>
          <ul className="tech-stack">
            {techStack.map((item, i) => (
              <p className="skill" key={item + i}>
                {item}
              </p>
            ))}
          </ul>
        </div> */}
        <div className={`${isMobile ? "mobile-card" : ""} img-zoom`}>
          {position === "left" ? (
            <ReactImageMagnify
              {...{
                enlargedImageContainerClassName: "zoom-container",
                ...getCardProps(imgSrc, idx, isMobile),
              }}
            />
          ) : (
            <ReactImageMagnify
              {...{
                ...getCardProps(imgSrc, idx, isMobile),
                enlargedImageContainerStyle: {
                  left: "-105%",
                  ...getCardProps(imgSrc, idx, isMobile)
                    .enlargedImageContainerStyle,
                },
              }}
            />
          )}
        </div>
      </div>
      <div className="portfolio-project-description">
        <p className="portfolio-card-header">{Category} App</p>
        <ul className="portfolio-tech-list">
          <li className="tech-list-item">
            <div className={"details " + classTitle}>
              {/* <h1>{title}</h1> */}
              <ul className="tech-stack">
                {techStack.map((item, i) => (
                  <div className="project-details" key={item + i}>
                    <svg width="30" height="30" className="techStack-logo">
                      <image xlinkHref={imgIcon[i]} height="25" width="25" />
                    </svg>
                    <p className="skill">{item}</p>
                  </div>
                ))}
              </ul>
              <div className="project-description">
                <p>{Description}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PortfolioCard;

const getCardProps = (imgSrc, idx, isMobile) => {
  return {
    smallImage: {
      alt: "",
      isFluidWidth: true,
      src: imgSrc[idx],
    },
    largeImage: {
      src: imgSrc[idx],
      width: isMobile ? 1200 : 1900,
      height: isMobile ? 1000 : 1100,
    },
    imageStyle: {
      transition: "all 0.3s ease-out",
    },
    enlargedImageStyle: {
      objectFit: "contain",
    },
    enlargedImageContainerDimensions: {
      width: isMobile ? "300%" : "100%",
      height: isMobile ? "180%" : "150%",
    },
    lensStyle: {
      background: "hsla(0, 0%, 100%, .3)",
      border: "1px solid #ccc",
      width: "50px",
      height: "50px",
    },
    enlargedImageContainerStyle: {
      position: "absolute",
      zIndex: "10",
      backgroundColor: "black",
    },
  };
};

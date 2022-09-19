import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import "./PortfolioCard.css";
import AOS from "aos";
import { useEffect } from "react";

function PortfolioCard({
  imgSrc,
  delay,
  classTitle,
  title,
  position,
  hidden,
  techStack,
}) {
  const [idx, setIdx] = useState(0);
  let hiddenClass = "";

  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector(`.${classTitle}`).style.display = "flex";
  };

  const handleClose = (e) => {
    e.preventDefault();
    document.querySelector(`.${classTitle}`).style.display = "none";
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
        &#10095;
      </button>
      <button className="prev" onClick={handlePrev}>
        &#10094;
      </button>
      <div className={"portfolio-card-container "}>
        <div className={"details " + classTitle}>
          <h1>{title}</h1>
          <ul className="tech-stack">
            {techStack.map((item, i) => (
              <p className="skill" key={item + i}>
                {item}
              </p>
            ))}
          </ul>
          <button className="pc-close" onClick={handleClose}>
            close
          </button>
        </div>
        <div className="img-zoom">
          {position === "left" ? (
            <ReactImageMagnify
              {...{
                enlargedImageContainerClassName: "zoom-container",
                ...getCardProps(imgSrc, idx),
              }}
            />
          ) : (
            <ReactImageMagnify
              {...{
                ...getCardProps(imgSrc, idx),
                enlargedImageContainerStyle: {
                  left: "-105%",
                  ...getCardProps(imgSrc, idx).enlargedImageContainerStyle,
                },
              }}
            />
          )}
        </div>
      </div>
      <button className="pc-btn" onClick={handleClick}>
        view details
      </button>
    </div>
  );
}

export default PortfolioCard;

const getCardProps = (imgSrc, idx) => {
  return {
    smallImage: {
      alt: "",
      isFluidWidth: true,
      src: imgSrc[idx],
    },
    largeImage: {
      src: imgSrc[idx],
      width: 1900,
      height: 1100,
    },
    imageStyle: {
      transition: "all 0.3s ease-out",
      borderRadius: "10px",
      filter: "drop-shadow(4.89751px 4.89751px 3px rgba(51, 223, 211, 0.2))",
    },
    enlargedImageStyle: {
      objectFit: "contain",
    },
    enlargedImageContainerDimensions: {
      width: "100%",
      height: "150%",
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

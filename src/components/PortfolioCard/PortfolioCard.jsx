import React from "react";
import "./PortfolioCard.scss";
import AOS from "aos";
import { useEffect } from "react";
import dotSmall from "../../assets/dot-small.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PortfolioCard({
  imgSrc,
  delay,
  classTitle,
  hidden,
  techStack,
  Description,
  imgBg,
  imgIcon,
  logo,
  Category,
  nTs,
}) {
  let hiddenClass = "";
  let bg = imgBg;

  const slider = React.useRef(null);
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    centerPadding: "100px",
    infinite: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
          infinite: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "80px",
        },
      },
    ],
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
      <button className="next" onClick={() => slider?.current?.slickNext()}>
        &#x1F862;
      </button>
      <button className="prev" onClick={() => slider?.current?.slickPrev()}>
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

        <div className="slider-container">
          <Slider ref={slider} {...sliderSettings}>
            {imgSrc.map((img, index) => (
              <div key={index}>
                <img alt={img} src={img} className="crousel-image" async/>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="portfolio-project-description">
        <p className="portfolio-card-header">{Category} App</p>
        <ul className="portfolio-tech-list">
          <li className="tech-list-item">
            <div className={"details " + classTitle}>
              <ul className="tech-stack">
                {techStack.map((item, i) => (
                  <div className="project-details" key={item + i}>
                    <svg width="30" height="30" className="techStack-logo">
                      <image xlinkHref={imgIcon[i]} height="25" width="25" />
                    </svg>
                    <p className="skill">{item}</p>
                    {nTs-- > 1 && (
                      <svg width="40" height="40">
                        <image
                          xlinkHref={dotSmall}
                          x="9"
                          y="5"
                          height="20px"
                          width="20px"
                          className="startNewProject-dotSmall"
                        ></image>
                        
                      </svg>
                    )}
                  </div>
                ))}
              </ul>
              <div>
                <p className="project-description">{Description}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PortfolioCard;

import React from "react";
import "./TitlePage.css";
import logo from "../../Assests/logo.png";
import topRightCube from "../../Assests/tp-top-right-cube.svg";
import midTopCenterCube from "../../Assests/tp-mid-top-cube.svg";
import arrowBig from "../../Assests/arrow-3d1.svg";
import animeImg1 from "../../Assests/anime-img-1.svg";
import animeImg2 from "../../Assests/anime-img-2.svg";
import animeImg3 from "../../Assests/anime-img-3.svg";
import hiddenCube2 from "../../Assests/hidden-by-img-2-anime.svg";
import hiddenCube1 from "../../Assests/hidden-by-img-1-anime.svg";
import bottomLeftCube from "../../Assests/tp-top-right-cube.svg";
import bottomRightCube from "../../Assests/tp-bottom-right-cube.svg";
import sd1 from "../../Assests/not-visible-sd.svg";
import sd2 from "../../Assests/light-sd.svg";
import sd3 from "../../Assests/dark-sd.svg";
import TypeWriter from "typewriter-effect";
import AOS from "aos";
const titlePage = () => {
  AOS.init(
    {
      once:true
    }
  );
  return (
    <div className="titlePage">
      <div className="tp-1">
        <img src={logo} alt="" className="img-1" />
        <img src={topRightCube} alt="" className="img-2" />
      </div>
      <img src={midTopCenterCube} alt="" className="img-3" />
      <img src={arrowBig} alt="" className="arrow-img" />
      <div className="tp-2">
        <img src={bottomLeftCube} alt="" className="blc" />
        <div className="left-tp-2"
        data-aos="fade-right"
        data-aos-delay="500"
        >
          <div className="content-div">
            <div className="inner-heading-1">
              <h1 className="typewriter">
               <span>
               WE ARE&nbsp;
               </span>
                <span className="auto-write" >
                  <TypeWriter
                    options={{
                      autoStart: true,
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("KODERS")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("KREATORS")
                        .pauseFor(1500)

                        .deleteAll()
                        .start();
                    }}
                  />
                </span>
              </h1>
            </div>
            <div className="inner-heading-2">
              <p>We Kreate what you Kontemplate.</p>
            </div>
            <div className="inner-paragraph">
              <p>
                To cater all your software requirements, Koders is all you need!
                Koders provides the best Kwality! With tremendous growth in IT
                services, what makes Koders outstand others?
              </p>
            </div>
          </div>
        </div>
        {/* for the scroll down arrows */}
        <section id="scroll-down" className="sd">
          <a href="#about-id">
            <span>
              <img src={sd1} alt="" />
            </span>
            <span>
              <img src={sd2} alt="" />
            </span>
            <span>
              <img src={sd3} alt="" />
            </span>
          </a>
        </section>
        <img src={hiddenCube1} alt="" className="hc-1" />
        <div className="right-tp-2"
         data-aos="fade-left"
         data-aos-delay="500"
        >
          <div
            className="anime-img-1"
          >
            <img src={animeImg1} alt="" className="img-4" />
          </div>
          <div className="anime-img-2">
            <img src={animeImg2} alt="" className="img-5" />
          </div>
        </div>
      </div>
      <img src={hiddenCube2} alt="" className="hc-2" />
      <img src={bottomRightCube} alt="" className="brc" />
      <div className="anime-img-3">
        <img src={animeImg3} alt="" className="img-6" />
      </div>
    </div>
  );
};

export default titlePage;

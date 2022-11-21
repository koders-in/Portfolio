import React from "react";
import "./Clients.scss";
import Marquee from "react-fast-marquee";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const rowOne = [
  { src: "/logo/icon-1.svg", tooltip: "First to Notify" },
  { src: "/logo/icon-2.svg", tooltip: "Instaride" },
  { src: "/logo/icon-3.svg", tooltip: "Jupiter Toolbox" },
  { src: "/logo/icon-4.svg", tooltip: "Kyro Tool" },
  { src: "/logo/icon-5.svg", tooltip: "Hawa UI" },
  { src: "/logo/icon-6.svg", tooltip: "Gensis" },
  { src: "/logo/icon-7.svg", tooltip: "Lorem" },
  { src: "/logo/icon-8.svg", tooltip: "Divine" },
  { src: "/logo/icon-9.svg", tooltip: "Bat Proxy" },
  { src: "/logo/icon-11.svg", tooltip: "Argon AIO" },
  { src: "/logo/icon-12.svg", tooltip: "Machina" },
  { src: "/logo/icon-13.svg", tooltip: "Pluto" },
  { src: "/logo/icon-14.svg", tooltip: "Popbot" },
  { src: "/logo/icon-15.svg", tooltip: "Squared IO" },
  { src: "/logo/icon-17.svg", tooltip: "UC Toolbot" },
  { src: "/logo/icon-18.svg", tooltip: "Wrencho" },
];

const Clients = () => {
  return (
    <div className="Clients">
      <h1>
        Our <span>Clients</span>
      </h1>
      <div className="logo-container">
        <Marquee
          pauseOnHover={true}
          loop={0}
          speed={50}
          gradientColor={false}
          className="marq-1"
        >
          <div className="tech-container">
            {rowOne.map((item, i) => (
              <div key={i} className="logo-1 lorem" data-tooltip={item.tooltip}>
                <img
                  style={i === 0 ? { filter: "invert(1)" } : {}}
                  alt=""
                  className=""
                  src={item.src}
                  key={item.src}
                />
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee
          pauseOnHover={true}
          loop={0}
          speed={50}
          gradientColor={false}
          className="marq-1"
          direction="right"
        >
          <div className="tech-container">
            {rowOne.map((item, i) => (
              <div key={i} className="logo-1 lorem" data-tooltip={item.tooltip}>
                <img
                  style={i === 0 ? { filter: "invert(1)" } : {}}
                  alt=""
                  className=""
                  src={item.src}
                  key={item.src}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;

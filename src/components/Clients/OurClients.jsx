import React, { useState } from "react";
import Marquee from "react-fast-marquee";

import Divider from "../Divider/Divider";

import "./OurClients.scss";

const rowOne = [
  { src: "/logo/icon-1.svg", tooltip: "First to Notify", id: "icon-1" },
  { src: "/logo/icon-2.svg", tooltip: "Instaride", id: "icon-2" },
  { src: "/logo/icon-3.svg", tooltip: "Jupiter Toolbox", id: "icon-3" },
  { src: "/logo/icon-4.svg", tooltip: "Kyro Tool", id: "icon-4" },
  { src: "/logo/icon-5.svg", tooltip: "Hawa UI", id: "icon-5" },
  { src: "/logo/icon-6.svg", tooltip: "Gensis", id: "icon-6" },
  { src: "/logo/icon-7.svg", tooltip: "Lorem", id: "icon-7" },
  { src: "/logo/icon-8.svg", tooltip: "Divine", id: "icon-8" },
];
const rowTwo = [
  { src: "/logo/icon-9.svg", tooltip: "Bat Proxy", id: "icon-9" },
  { src: "/logo/icon-11.svg", tooltip: "Argon AIO", id: "icon-10" },
  { src: "/logo/icon-12.svg", tooltip: "Machina", id: "icon-11" },
  { src: "/logo/icon-13.svg", tooltip: "Pluto", id: "icon-12" },
  { src: "/logo/icon-14.svg", tooltip: "Popbot", id: "icon-13" },
  { src: "/logo/icon-15.svg", tooltip: "Squared IO", id: "icon-14" },
  { src: "/logo/icon-17.svg", tooltip: "UC Toolbot", id: "icon-15" },
  { src: "/logo/icon-18.svg", tooltip: "Wrencho", id: "icon-16" },
];

const OurClients = () => {
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  return (
    <div className="our-clients">
      <h1>
        Our <span>Clients</span>
      </h1>
      <Divider height="4rem" />
      <Marquee
        pauseOnHover={true}
        loop={0}
        speed={50}
        gradientColor={false}
        className="marquee-container-one"
      >
        {rowOne.map((item, i) => (
          <div key={item.src} className="logo-container">
            <img
              onMouseEnter={() => setIsShowTooltip(item.id)}
              onMouseLeave={() => setIsShowTooltip("")}
              style={i === 0 ? { filter: "invert(1)" } : {}}
              className="logo-container-img"
              alt={item.src}
              src={item.src}
            />
            {isShowTooltip === item.id && <div>{item.tooltip}</div>}
          </div>
        ))}
      </Marquee>
      <Divider height="4rem" />
      <Marquee
        pauseOnHover={true}
        loop={0}
        speed={50}
        gradientColor={false}
        className="marquee-container-two"
        direction="right"
      >
        {rowTwo.map((item, i) => (
          <div key={item.src} className="logo-container">
            <img
              onMouseEnter={() => setIsShowTooltip(item.id)}
              onMouseLeave={() => setIsShowTooltip("")}
              alt={item.src}
              src={item.src}
              key={item.src}
              className="logo-container-img"
            />
            {isShowTooltip === item.id && <div>{item.tooltip}</div>}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default OurClients;

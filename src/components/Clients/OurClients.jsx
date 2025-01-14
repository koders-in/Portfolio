import React, { useState, useCallback } from "react";
import Marquee from "react-fast-marquee";
import Divider from "../Divider/Divider";
import "./OurClients.scss";

const logos = [
  { src: "/logo/icon-1.png", tooltip: "First to Notify", id: "icon-1" }, 
  { src: "/logo/icon-2.svg", tooltip: "Instaride", id: "icon-2" },
  { src: "/logo/icon-3.svg", tooltip: "Jupiter Toolbox", id: "icon-3" },
  { src: "/logo/icon-4.svg", tooltip: "Kyro Tool", id: "icon-4" },
  { src: "/logo/icon-5.svg", tooltip: "Hawa UI", id: "icon-5" },
  { src: "/logo/icon-6.svg", tooltip: "Gensis", id: "icon-6" },
  { src: "/logo/icon-7.svg", tooltip: "Lorem", id: "icon-7" },
  { src: "/logo/icon-8.svg", tooltip: "Divine", id: "icon-8" },
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
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, tooltipText: "" });

  const handleMouseEnter = useCallback((tooltipText, event) => {
    const { clientX, clientY } = event;
    setTooltip({
      visible: true,
      tooltipText,
      x: clientX + 15, // Offset for better visibility
      y: clientY + 15,
    });
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      setTooltip((prev) => ({
        ...prev,
        x: clientX + 15,
        y: clientY + 15,
      }));
    },
    []
  );

  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0, tooltipText: "" });
  };

  return (
    <div className="our-clients">
      <h1>
        Our <span>Clients</span>
      </h1>
      <Divider height="4rem" />
      <div className="marquee-container">
        <Marquee
          pauseOnHover={true}
          loop={0}
          speed={50}
          gradientColor={false}
          className="marquee"
        >
          {logos.slice(0, 8).map((item) => (
            <div
              key={item.id}
              className="logo-container"
              onMouseEnter={(e) => handleMouseEnter(item.tooltip, e)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <img
                className="logo-container-img"
                id={item.id}
                alt={item.tooltip}
                src={item.src}
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div>
        <Marquee
          pauseOnHover={true}
          loop={0}
          speed={50}
          gradientColor={false}
          className="marquee"
          direction="right"
        >
          {logos.slice(8, 16).map((item) => (
            <div
              key={item.id}
              className="logo-container"
              onMouseEnter={(e) => handleMouseEnter(item.tooltip, e)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <img
                className="logo-container-img"
                id={item.id}
                alt={item.tooltip}
                src={item.src}
              />
            </div>
          ))}
        </Marquee>
      </div>
      {tooltip.visible && (
        <div
          className="tooltip"
          style={{
            left: tooltip.x,
            top: tooltip.y,
          }}
        >
          {tooltip.tooltipText}
        </div>
      )}
    </div>
  );
};

export default OurClients;

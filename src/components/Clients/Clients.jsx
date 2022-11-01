import React from "react";
import "./Clients.scss";
import Marquee from "react-fast-marquee";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Clients = () => {
  return (
    <div className="Clients">
      <h1>
        Our <span>Clients</span>
      </h1>
      <div className="logo-container">
        <Marquee loop={0} speed={50} gradientColor={false} className="marq-1">
          <div style={{background:"white"}} className="logo-1 lorem" data-tooltip="First to Notify">
            <img src="/logo/icon-1.svg" alt="" />
          </div>

          <div className="logo-1 lorem" data-tooltip="Instaride">
            <img src="/logo/icon-2.svg" alt="" />
          </div>
          <div className="logo-1 lorem" data-tooltip="Jupiter Toolbox">
            <img src="/logo/icon-3.svg" alt="" />
          </div>
          <div className="logo-1 lorem" data-tooltip="Kyro Tool">
            <img src="/logo/icon-4.svg" alt="" />
          </div>
          <div className="logo-1 lorem" data-tooltip="Hawa UI">
            <img src="/logo/icon-5.svg" alt="" />
          </div>
          <div className="logo-1 lorem" data-tooltip="Gensis">
            <img src="/logo/icon-6.svg" alt="" />
          </div>
          <div className="logo-1 lorem" data-tooltip="Lorem">
            <img src="/logo/icon-7.svg" alt="" />
          </div>
          <div className="logo-1 lorem" data-tooltip="Divine">
            <img src="/logo/icon-8.svg" alt="" />
          </div>
          <div className="logo-1 lorem" data-tooltip="Bat Proxy">
            <img src="/logo/icon-9.svg" alt="" />
          </div>
        </Marquee>
        <Marquee
          loop={0}
          speed={50}
          gradientColor={false}
          direction={"right"}
          className="marq-2"
        >
          <div className="logo-1 lorem" data-tooltip="Argon AIO">
            <img src="/logo/icon-10.svg" alt="" />
          </div>
          <div className="logo-1 lorem" data-tooltip="Arc AIO">
            <img src="/logo/icon-11.svg" alt="" />
          </div>
          <div className="logo-1 lorem" data-tooltip="Machina">
            <img src="/logo/icon-12.svg" alt="" />
          </div>
          <div className="logo-1 lorem" data-tooltip="Pluto">
            <img src="/logo/icon-13.svg" alt="" />
          </div>
          <div className="logo-1 lorem" data-tooltip="Popbot">
            <img src="/logo/icon-14.svg" alt="" />
          </div>
          <div className="logo-1 squared-io" data-tooltip="Squared IO">
            <img src="/logo/icon-15.svg" alt="" />
          </div>
          <div className="logo-1 argon" data-tooltip="UC Toolbot">
            <img src="/logo/icon-17.svg" alt="" />
          </div>
          <div className="logo-1 wrencho" data-tooltip="Wrencho">
            <img src="/logo/icon-18.svg" alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;

import React from "react";
import "./Clients.css";
import Marquee from 'react-fast-marquee';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Clients = () => {
  return (
    <div className="Clients">
      <h1>
        Our <span>Clients</span>
      </h1>
      <div className="logo-container">
     <Marquee  speed={50} gradientColor={false} >
     <img src="/ducati.png" alt="" />
     <img src="/ferrari.png" alt="" />
     <img src="/food.png" alt="" />
     <img src="/lambo.png" alt="" />
     <img src="/nasa.png" alt="" />
     <img src="/tesla.png" alt="" />
     <img src="/apple.png" alt="" />
     <img src="/uber.png" alt="" />
     </Marquee>
     <Marquee  speed={50} gradientColor={false} direction={"right"} >
     <img src="/ducati.png" alt="" />
     <img src="/ferrari.png" alt="" />
     <img src="/food.png" alt="" />

     <img src="/lambo.png" alt="" />
     <img src="/nasa.png" alt="" />
     <img src="/tesla.png" alt="" />
     <img src="/apple.png" alt="" />
     <img src="/uber.png" alt="" />
     </Marquee>
      </div>
    </div>
  );
};

export default Clients;

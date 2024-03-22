import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";
import Divider from "../Divider/Divider";
import axios from "axios";
import "./OurClients.scss";

const OurClients = () => {
  const [clientData, SetClientData] = useState([]);
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const base_url = "https://strapi.koders.in";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://strapi.koders.in/api/client-logos?populate=*"
        );
        console.log(response.data.data[0].attributes.img);
        SetClientData(response.data.data);
      } catch (error) {
        console.error("Error fetching data from Strapi:", error);
      }
    };

    fetchData();
  }, []);

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
        {clientData &&
          clientData
            .slice(0, Math.ceil(clientData.length / 2))
            .map((item, i) => (
              <div key={item.id} className="logo-container">
                <img
                  key={item.id}
                  onMouseEnter={() => setIsShowTooltip(item.id)}
                  onMouseLeave={() => setIsShowTooltip("")}
                  style={i === 0 ? { filter: "invert(1)" } : {}}
                  className="logo-container-img"
                  alt={item.attributes.img.data.attributes.name} // Set alt text
                  src={base_url + item.attributes.img.data.attributes.url} // Constructing URL with base_url
                />
                {isShowTooltip === item.id && (
                  <div>{item.attributes.tooltip}</div>
                )}
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
        {clientData &&
          clientData.slice(Math.ceil(clientData.length / 2)).map((item, i) => (
            <div key={item.id} className="logo-container">
              <img
                key={item.id}
                onMouseEnter={() => setIsShowTooltip(item.id)}
                onMouseLeave={() => setIsShowTooltip("")}
                style={i === 0 ? { filter: "invert(1)" } : {}}
                className="logo-container-img"
                alt={item.attributes.img.data.attributes.name} // Set alt text
                src={base_url + item.attributes.img.data.attributes.url} // Constructing URL with base_url
              />
              {isShowTooltip === item.id && (
                <div>{item.attributes.tooltip}</div>
              )}
            </div>
          ))}
      </Marquee>
    </div>
  );
};

export default OurClients;

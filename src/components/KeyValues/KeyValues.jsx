import React, { useEffect } from "react";
import KeyValueCard from "../KeyValueCard/KeyValueCard";
import "./KeyValues.scss";
import AOS from "aos";

const KeyValues = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  const cardsData = [
    {
      imgSrc: "/company1.webp",
      title: "Company Backend",
      desc: "Unlike freelancers, we stick until the work is done.",
      delay: "200",
    },
    {
      imgSrc: "/onestop1.webp",
      title: "One-stop Shop",
      desc: "Providing design, frontend, and backend services.",
      delay: "300",
    },
    {
      imgSrc: "/satisfy1.webp",
      title: "Satisfaction",
      desc: "Quality delivery or 100% refund*.",
      delay: "400",
    },
    {
      imgSrc: "/bulbex1.webp",
      title: "Innovation",
      desc: "The soul of our company is trust and integrity.",
      delay: "500",
    },
  ];

  return (
    <div className="KeyValues">
      <div className="heading">
        <img
          src="/key-value-cube.svg"
          alt="Key Value Decorative Cube"
          loading="lazy"
        />
        <h1 data-aos="fade-right" data-aos-delay="200">
          Our Key <span>Values</span>
        </h1>
      </div>
      <div className="bg">
        <img src="/bg.svg" alt="Background Decoration" loading="lazy" />
      </div>
      <div className="cards">
        {cardsData.map(({ imgSrc, title, desc, delay }, index) => (
          <KeyValueCard
            key={index}
            imgSrc={imgSrc}
            title={title}
            desc={desc}
            delay={delay}
          />
        ))}
      </div>
    </div>
  );
};

export default KeyValues;

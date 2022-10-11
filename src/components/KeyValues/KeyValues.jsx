import React from "react";
import KeyValueCard from "../KeyValueCard/KeyValueCard";
import "./KeyValues.scss";
import AOS from "aos";

function KeyValues() {
  AOS.init({
    duration: 500,
    once: true,
  });
  return (
    <div className="KeyValues">
      <div className="heading">
        <img src="/key-value-cube.svg" alt="" />
        <h1 data-aos="fade-right" data-aos-delay="200">
          Our Key <span>Values</span>
        </h1>
      </div>
      <div className="bg">
        <img src="/bg.svg" alt="" />
      </div>
      <div className="cards">
        <KeyValueCard
          imgSrc="/icon1.png"
          title="Company backed"
          desc="Unlike freelancers, we will stick until work is done"
          delay="200"
        />
        <KeyValueCard
          imgSrc="/icon2.png"
          title="One-stop Shop"
          desc="Provides design, frontend and backend services"
          delay="300"
        />
        <KeyValueCard
          imgSrc="/icon3.png"
          title="Satisfaction"
          desc="Quality delivery or 100% refund*"
          delay="400"
        />
        <KeyValueCard
          imgSrc="/icon4.png"
          title="Innovation"
          desc="The soul of our Kompany is Trust & Integrity"
          delay="500"
        />
      </div>
    </div>
  );
}

export default KeyValues;

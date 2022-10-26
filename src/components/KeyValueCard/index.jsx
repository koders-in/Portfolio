import React from "react";
import "./style.scss";
import AOS from "aos";

function KeyValueCard({ imgSrc, title, desc, delay }) {
  AOS.init({
    once: true,
  });
  return (
    <div className="KeyValueCard">
      <div className="kvc-container" data-aos="fade-up" data-aos-delay={delay}>
        <img src={imgSrc} alt="" />
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default KeyValueCard;

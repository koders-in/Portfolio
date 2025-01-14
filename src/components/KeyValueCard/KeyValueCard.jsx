import React, { Children } from "react";
import "./KeyValueCard.scss";
import AOS from "aos";
function KeyValueCard({ imgSrc, title, desc, delay}) {
  AOS.init({
    once: true,
  });
  return (
    <div className="KeyValueCard">
      <div className="kvc-container" data-aos="fade-up" data-aos-delay={delay}>
        <img
          src={imgSrc}
          alt={title}
          sizes="(max-width: 560px) 100vw, (max-width: 960px) 8rem, 11rem"
          loading="lazy"
          className="kvc-image animated"
        />
        <div className="kvc-content">
          <h2 className="kvc-title" >{title}</h2>
          <p className="kvc-desc">{desc}</p>
        </div>
      </div>
    </div>
  );
}
export default KeyValueCard;
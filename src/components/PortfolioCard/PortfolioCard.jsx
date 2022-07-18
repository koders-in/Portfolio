import React from 'react';
import './PortfolioCard.css';
import AOS from 'aos';

function PortfolioCard({ imgSrc, delay }) {
  AOS.init(
    {
      once:true
    }
  );
  return (
    <div className='PortfolioCard'>
        <div className="PortfolioCard-container"
        data-aos="fade-up"
        data-aos-delay={delay}
        >
            <img src={imgSrc} alt="" />
        </div>
    </div>
  )
}

export default PortfolioCard
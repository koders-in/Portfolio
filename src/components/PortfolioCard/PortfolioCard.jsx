import React from 'react';
import './PortfolioCard.css';

function PortfolioCard({ imgSrc }) {
  return (
    <div className='PortfolioCard'>
        <div className="PortfolioCard-container">
            <img src={imgSrc} alt="" />
        </div>
    </div>
  )
}

export default PortfolioCard
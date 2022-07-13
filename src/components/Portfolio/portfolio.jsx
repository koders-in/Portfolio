import React from 'react';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className='Portfolio'>
        <div className="portfolio-header">
            <h1>PORTFOLIO</h1>
            <h4>AUTOMATION: Rules the Roost</h4>
            <p>Automation is made easier with Koders. Take a look at the various projects we’ve done</p>
        </div>
        <div className="portfolio-cards">
            <PortfolioCard imgSrc="/hawa.png" />
            <PortfolioCard imgSrc="/pop-bot.png" />
            <PortfolioCard imgSrc="/Divine.png" />
            <PortfolioCard imgSrc="/Machina.png" />
            <PortfolioCard imgSrc="/squared.png" />
            <PortfolioCard imgSrc="/uc-toolbot.png" />
        </div>
    </div>
  )
}

export default Portfolio
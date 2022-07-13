import React from 'react';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import './portfolio.css';

function Portfolio() {   
  return (
    <div className='Portfolio'>
        <div className="portfolio-header">
            <h1>PORTFOLIO</h1>
            <h4>AUTOMATION: Rules the Roost</h4>
            <p>Automation is made easier with Koders. Take a look at the various projects we’ve done</p>
        </div>
        <div className="portfolio-cards">
            <PortfolioCard imgSrc="/hawa.png" delay="200" />
            <PortfolioCard imgSrc="/pop-bot.png"  delay="300"  />
            <PortfolioCard imgSrc="/Divine.png"  delay="200"  />
            <PortfolioCard imgSrc="/Machina.png"  delay="300"  />
            <PortfolioCard imgSrc="/squared.png"  delay="200"  />
            <PortfolioCard imgSrc="/uc-toolbot.png"  delay="300"  />
        </div>
    </div>
  )
}

export default Portfolio
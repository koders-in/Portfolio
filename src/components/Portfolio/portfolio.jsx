import React from 'react';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import './portfolio.css';

function Portfolio() { 
  
  const handleClick = () => {
    document.querySelectorAll('.hidden').forEach(item => {
      item.classList.remove('hidden');
    })
    document.querySelector('.portfolio-btn').style.display = "none";
  }

  return (
    <div className='Portfolio'>
        <div className="portfolio-header">
            <h1>PORTFOLIO</h1>
            <h4>AUTOMATION: Rules the Roost</h4>
            <p>Automation is made easier with Koders. Take a look at the various projects we’ve done</p>
        </div>
        <div className="portfolio-cards">
            <PortfolioCard hidden={false} imgSrc={["/hawa.png", "/pop-bot.png", "/Divine.png", "/Machina.png", "/squared.png", "/uc-toolbot.png"]} delay="200" title="Hawa" classTitle="hawa" position="left" />
            <PortfolioCard hidden={false} imgSrc={["/pop-bot.png", "/hawa.png", "/Divine.png", "/Machina.png", "/squared.png", "/uc-toolbot.png"]}  delay="300" title="Pop Bot" classTitle="pop-bot" position="right" />               
            <PortfolioCard hidden={false} imgSrc={["/Divine.png", "/hawa.png", "/pop-bot.png", "/Machina.png", "/squared.png", "/uc-toolbot.png"]}  delay="200" title="Divine" classTitle="divine" position="left" />
            <PortfolioCard hidden={false} imgSrc={["/Machina.png", "/hawa.png", "/pop-bot.png", "/Divine.png", "/squared.png", "/uc-toolbot.png"]}  delay="300" title="Machina" classTitle="machina" position="right" />
            <PortfolioCard hidden={false} imgSrc={["/squared.png", "/hawa.png", "/pop-bot.png", "/Divine.png", "/Machina.png", "/uc-toolbot.png"]}  delay="200" title="Squarred" classTitle="squarred" position="left" />
            <PortfolioCard hidden={false} imgSrc={["/uc-toolbot.png", "/hawa.png", "/pop-bot.png", "/Divine.png", "/Machina.png", "/squared.png"]}  delay="300" title="Uc Toolbot" classTitle="uc-toolbot" position="right" />
            <PortfolioCard hidden={true} imgSrc={["/hawa.png", "/pop-bot.png", "/Divine.png", "/Machina.png", "/squared.png", "/uc-toolbot.png"]} delay="200" title="Hawa" classTitle="hawa" position="left" />
            <PortfolioCard hidden={true} imgSrc={["/pop-bot.png", "/hawa.png", "/Divine.png", "/Machina.png", "/squared.png", "/uc-toolbot.png"]}  delay="300" title="Pop Bot" classTitle="pop-bot" position="right" />               
            <PortfolioCard hidden={true} imgSrc={["/Divine.png", "/hawa.png", "/pop-bot.png", "/Machina.png", "/squared.png", "/uc-toolbot.png"]}  delay="200" title="Divine" classTitle="divine" position="left" />
            <PortfolioCard hidden={true} imgSrc={["/Machina.png", "/hawa.png", "/pop-bot.png", "/Divine.png", "/squared.png", "/uc-toolbot.png"]}  delay="300" title="Machina" classTitle="machina" position="right" />
            <PortfolioCard hidden={true} imgSrc={["/squared.png", "/hawa.png", "/pop-bot.png", "/Divine.png", "/Machina.png", "/uc-toolbot.png"]}  delay="200" title="Squarred" classTitle="squarred" position="left" />
            <PortfolioCard hidden={true} imgSrc={["/uc-toolbot.png", "/hawa.png", "/pop-bot.png", "/Divine.png", "/Machina.png", "/squared.png"]}  delay="300" title="Uc Toolbot" classTitle="uc-toolbot" position="right" />
        </div>
        <button className='portfolio-btn' onClick={handleClick}>view all</button>
    </div>
  )
}

export default Portfolio
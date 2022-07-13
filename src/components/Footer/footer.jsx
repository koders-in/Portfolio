import React from 'react';
import './footer.css';
import {BsInstagram, BsLink} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';

function Footer() {
  return (
    <div className='Footer'>
         
        <div className="footer-link">
            <a href="#">www.koders.in</a>
        </div>
        <div className="footer-bottom">
            <div className="social-links">
            <a href=""><BsInstagram /></a>
            <a href=""><BsFacebook /></a>
            <a href=""><BsTwitter /></a>
            <a href=""><BsGithub /></a>
            <a href=""><BsLinkedin /></a>
            </div>
            <div className="bottom-anime">
                {/* <img src="/bottom-anime-1.png" alt="" /> */}
                <div className="ba-rectangle-1"></div>
            </div>
            <div className="copyright">
                <p>Made with ❤️ by Koders</p>
                <small>Copyright ©2022 | All rights reserved</small>
            </div>
            
        </div>
    </div>
  )
}

export default Footer
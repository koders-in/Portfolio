import React from 'react';
import KeyValueCard from '../KeyValueCard/KeyValueCard';
import './KeyValues.css';

function KeyValues() {
  return (
    <div className='KeyValues'>
        <div className="heading">
            <img src="/key-value-cube.svg" alt="" />
            <h1>Our Key <span>Values</span></h1>
        </div>
        <div className="bg">
            <img src="/bg.svg" alt="" />
        </div>
        <div className="cards">
            <KeyValueCard imgSrc="/icon1.png" title="Responsive Services" desc="We kreate 1:1 website designs." />
            <KeyValueCard imgSrc="/icon2.png" title="One-stop Shop" desc="Koders isn’t your regular freelancer, but an entire development company building both frontend UI and backend scripts." />
            <KeyValueCard imgSrc="/icon3.png" title="Client Satisfaction" desc="Our clients are Our Boss." />
            <KeyValueCard imgSrc="/icon4.png" title="Innovation" desc="We go beyond the possibilities to make the impossible possible. The soul of our Kompany is Kreation & Innovation." />
        </div>
        <img className="kv-cube-bottom" src="kv-cube-bottom.svg" alt="" />
    </div>
  )
}

export default KeyValues
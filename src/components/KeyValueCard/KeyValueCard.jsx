import React from 'react';
import './KeyValueCard.css'

function KeyValueCard({ imgSrc, title, desc }) {
  return (
    <div className='KeyValueCard'>
        <div className="kvc-container">
            <img src={imgSrc} alt="" />
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default KeyValueCard
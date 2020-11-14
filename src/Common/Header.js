import React from 'react';
import banner from '../Assets/Images/flowerBannerBw.jpg' 

export default () => 
  <div className="header-container" style={{backgroundImage: `url(${banner})`}}>  
    <h1 className="title">Funky Gubbins</h1>
    <div className='buttonContainer'>
      <button type="button" className="header_link">Home</button>
      <button type="button" className="header_link">Shop</button>
      <button type="button" className="header_link">About</button>
    </div>
  </div>






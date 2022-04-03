import React from 'react';
import banner from '../Assets/Images/flowerBannerBw.jpg';
import './Header.styles.css';

export default () =>
  <div className="header-image-container" style={{ backgroundImage: `url(${banner})` }}>
    <div className="opacity">
      <h1 className="header-title">Funky Gubbins</h1>
      {/* remove buttons, use side drawer for these options. */}
      {/* <div className='buttonContainer'>
      <button type="button" className="button">Home</button>
      <button type="button" className="button">Shop</button>
      <button type="button" className="button">About</button>
    </div> */}
    </div>
  </div>;






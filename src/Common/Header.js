import React from 'react';
import banner from '../Assets/Images/flowerBannerBw.jpg';

export default () =>
  <div className="header-container" style={{ backgroundImage: `url(${banner})` }}>
    <h1 className="title">Funky Gubbins</h1>
    {/* remove buttons, use side drawer for these options. */}
    <div className='buttonContainer'>
      <button type="button" className="button">Home</button>
      <button type="button" className="button">Shop</button>
      <button type="button" className="button">About</button>
    </div>
  </div>;






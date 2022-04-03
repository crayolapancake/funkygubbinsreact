import React from 'react';

export default ({ title, imageUrl }) =>
  <div className="single-product-container">
    <h1 className="product-title">{title}</h1>
    <img src={imageUrl} alt="jewellery" style={{ height: '250px' }} />
  </div>;






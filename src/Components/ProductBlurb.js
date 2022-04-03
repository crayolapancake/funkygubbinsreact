import React from 'react';
import './ProductBlurb.styles.css';

export default ({ title, imageUrl, price }) =>
  <div className="single-product-container" onClick={() => window.open("https://www.etsy.com/uk/shop/FunkyGubbins", "_blank")}>
    <img src={imageUrl} alt="jewellery" className="product-image" style={{ height: '250px' }}
    />
    <h1 className="product-title">{title}</h1>
    <h1 className="product-title">£{price}</h1>
  </div>;






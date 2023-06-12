import './PortfolioItem.css';
import React from 'react';

const PortfolioItem = ({itemName, link}) => {
  return (
    <li className="portfolio__item">
      <p className="portfolio__example">{itemName}</p>
      <a className="link portfolio__link" href={link} target="_blank" rel="noopener noreferrer">↗</a>
    </li>
  );
};

export default PortfolioItem;

import './PortfolioItem.css';
import React from 'react';

const PortfolioItem = ({ itemName, link }) => {
  return (
    <li className="portfolio__item">
      <a className="portfolio__link" href={link} target="_blank" rel="noopener noreferrer">
        <p className="portfolio__example">{itemName}</p>
        <span className="link portfolio__link-image">↗</span>
      </a>
    </li>
  );
};

export default PortfolioItem;

import PortfolioItem from './components/PortfolioItem/PortfolioItem';
import './Portfolio.css';
import React from 'react';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__items">
        <PortfolioItem itemName="Статичный сайт" link="https://github.com/AZhevlakov/how-to-learn" />
        <PortfolioItem itemName="Адаптивный сайт" link="https://github.com/AZhevlakov/russian-travel" />
        <PortfolioItem itemName="Одностраничное приложение" link="https://github.com/AZhevlakov/react-mesto-api-full-gha" />
      </ul>
    </div>
  );
};

export default Portfolio;

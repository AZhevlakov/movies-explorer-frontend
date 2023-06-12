import ButtonForm from '../../UI/Button/ButtonForm/ButtonForm';
import React from 'react';
import './SearchLine.css';

const SearchLine = ({ buttonText }) => {
  return (
    <div className="search-line">
      <input type="search" className="search-line__input" placeholder="Фильм" required />
      <ButtonForm className="search-line__button" text={buttonText} />
    </div>
  );
};

export default SearchLine;

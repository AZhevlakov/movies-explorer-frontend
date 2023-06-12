import './SearchLine.css';
import ButtonForm from '../../UI/Button/ButtonForm/ButtonForm';
import React from 'react';

const SearchLine = ({ buttonText }) => {
  return (
    <div className="search-line">
      <input type="search" className="search-line__input" placeholder="Фильм" />
      <ButtonForm className="search-line__button" text={buttonText} />
    </div>
  );
};

export default SearchLine;

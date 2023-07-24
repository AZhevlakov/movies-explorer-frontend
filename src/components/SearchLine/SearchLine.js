import ButtonForm from '../../UI/Button/ButtonForm/ButtonForm';
import React from 'react';
import './SearchLine.css';

const SearchLine = ({ buttonText, values, errors, isValid, handleChange, inputName, errorText, setErrorText }) => {

  return (
    <>
      <div className="search-line">
        <input
          value={values[inputName] ?? ''}
          onChange={handleChange}
          onFocus={() => setErrorText("")}
          onBlur={() => setErrorText(errors[inputName])}
          type="search"
          name={inputName}
          id={inputName}
          className="search-line__input"
          placeholder="Фильм"
        />
        <ButtonForm className="search-line__button" text={buttonText} isActive={isValid} />
      </div>
      <span className="">  {/* className={`form__input-error ${!isFocus ? 'form__input-error_active' : ''}`} */}
        {errorText}
      </span>
    </>
  );
};

export default SearchLine;

import './SearchForm.css';
import React from 'react';
import ToggleCheckbox from '../../components/ToggleCheckbox/ToggleCheckbox';
import SearchLine from '../../components/SearchLine/SearchLine';

const SearchForm = () => {
  return (
    <div className="section search">
      <form className="search-form">
        <SearchLine buttonText="Поиск" />
        <ToggleCheckbox text="Короткометражки" className="" />
      </form>
    </div>
  );
};

export default SearchForm;

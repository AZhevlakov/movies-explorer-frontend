import './SearchForm.css';
import React, { useState } from 'react';
import ToggleCheckbox from '../../components/ToggleCheckbox/ToggleCheckbox';
import SearchLine from '../../components/SearchLine/SearchLine';
import { useFormValidation } from '../../utils/hooks/useFormValidation';

const SearchForm = ({ onSearch, searchLineValue = '', toggle = false }) => {
  const inputName = "search";
  const { values, errors, isValid, handleChange } = useFormValidation({ [inputName]: searchLineValue });
  const [isToggleChecked, setIsToggleChecked] = useState(toggle);
  const [errorText, setErrorText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values[inputName]) {
      setErrorText("Нужно ввести ключевое слово");
    } else {
      onSearch(values[inputName], isToggleChecked);
    }
  };

  const handleToggleOnChange = () => {
    onSearch(values[inputName], !isToggleChecked);
    setIsToggleChecked(prev => !prev);
  }

  return (
    <div className="section search">
      <form onSubmit={handleSubmit} className="search-form" autoComplete="off">
        <SearchLine
          values={values}
          errors={errors}
          isValid={isValid}
          handleChange={handleChange}
          inputName={inputName}
          buttonText="Поиск"
          errorText={errorText}
          setErrorText={setErrorText}
        />
        <ToggleCheckbox
          text="Короткометражки"
          isChecked={isToggleChecked}
          onChange={handleToggleOnChange}
        />
      </form>
    </div>
  );
};

export default SearchForm;

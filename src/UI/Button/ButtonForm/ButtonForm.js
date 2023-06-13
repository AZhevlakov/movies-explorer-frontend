import '../Button';
import './ButtonForm.css';
import React from 'react';

const ButtonForm = ({ text, isActive = true, className, ...props }) => {
  return (
    <button
      className={`button form__button-submit ${isActive ? '' : 'form__button-submit_inactive'} ${className}`}
      type="submit"
      {...props}
    >
      {text}
    </button>
  );
};

export default ButtonForm;

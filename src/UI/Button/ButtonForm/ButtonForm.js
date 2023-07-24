import '../Button';
import './ButtonForm.css';
import React from 'react';

const ButtonForm = ({ text, isActive = true, className = '', isBlocked, ...props }) => {
  return (
    <button
      className={`button form__button-submit ${isActive ? '' : 'form__button-submit_inactive'} ${className}`}
      type="submit"
      disabled={isBlocked}
      {...props}
    >
      {text}
    </button>
  );
};

export default ButtonForm;

import './ToggleCheckbox.css';
import React from 'react';

const ToggleCheckbox = ({ text, className = '', isChecked, onChange }) => {
  return (
    <label className={`toggle-checkbox ${className}`} htmlFor="toggle-checkbox">
      <input
        checked={isChecked}
        onChange={onChange}
        className="toggle-checkbox__key"
        type="checkbox"
        name="toggle-checkbox"
        id="toggle-checkbox"
      />
      <span className="toggle-checkbox__text">{text}</span>
    </label>
  );
};

export default ToggleCheckbox;

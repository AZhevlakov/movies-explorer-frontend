import './ToggleCheckbox.css';
import React, { useState } from 'react';

const ToggleCheckbox = ({value, text, className}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className={`toggle-checkbox ${className}`} htmlFor="checkbox">
      <input
        onClick={() => setIsChecked(!isChecked)}
        className="toggle-checkbox__key"
        type="checkbox"
        name="checkbox"
        id="checkbox"
        value={value}
      />
      <span className="toggle-checkbox__text">{text}</span>
    </label>
  );
};

export default ToggleCheckbox;

import './LabelInputForm.css';
import React, { useState } from 'react';

const LabelInputForm = ({
  values,
  errors,
  handleChange,
  text,
  name,
  type,
  placeholder,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const onFocus = () => setIsFocus(true)
  const onBlur = () => setIsFocus(false)

  return (
    <label className="form__field">
      {text}
      <input
        value={values[name] ?? ''}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        className={`form__input ${isFocus ? 'form__input_on-focus' : ''}`}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...props}
      />
      <span
        className={`form__input-error ${!isFocus ? 'form__input-error_active' : ''}`}
      >
        {errors[name]}
      </span>
    </label>
  );
};

export default LabelInputForm;

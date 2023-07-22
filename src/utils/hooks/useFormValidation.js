import { useState } from "react";
import validator from 'validator';

export function useFormValidation(initialValues = {}, initialIsValid = false) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(initialIsValid);

  const handleChange = (evt) => {
    const { name, value, validationMessage, form } = evt.target;
    if (name === 'email') {
      const isValidEmail = validator.isEmail(value);
      if (!isValidEmail) {
        evt.target.setCustomValidity('Некорректный email');
        setErrors({ ...errors, [name]: 'Некорректный email' });
      } else {
        evt.target.setCustomValidity('');
        setErrors({ ...errors, [name]: '' });
      }
    } else {
      setErrors({ ...errors, [name]: validationMessage });
    }
    setValues({ ...values, [name]: value });
    setIsValid(form.checkValidity());
  };

  const errorClassName = () => `form__input-error ${errors ? 'form__input-error_active' : ''}`;

  return { values, errors, isValid, handleChange, errorClassName }
}

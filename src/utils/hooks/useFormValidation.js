import { useState } from "react";

export function useFormValidation(initialValues = {}, initialIsValid = false) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(initialIsValid);

  const handleChange = (evt) => {
    const { name, value, validationMessage, form } = evt.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setIsValid(form.checkValidity());
  };

  const errorClassName = () => `form__input-error ${errors ? 'form__input-error_active' : ''}`;

  return { values, errors, isValid, handleChange, errorClassName }
}

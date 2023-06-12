import React from 'react';
import { useFormValidation } from '../../hooks/useFormValidation';
import PageLayout from '../components/PageLayout/PageLayout';
import LabelInputForm from '../../components/LabelInputForm/LabelInputForm';
import './Register.css';
import FormAuth from '../../modules/FormAuth/FormAuth';

const Register = ({ onFormSubmit }) => {
  const { values, errors, isValid, handleChange } = useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.userName || !values.email || !values.password) {
      return;
    }
    // onFormSubmit(values.userName, values.email, values.password);
  };

  return (
    <PageLayout isHeader={false} isFooter={false}>
      <FormAuth
        onSubmit={handleSubmit}
        title="Добро пожаловать!"
        buttonSubmitText="Зарегистрироваться"
        isButtonSubmitActive={isValid}
        isAuthText="Уже зарегистрированы?&nbsp;"
        isAuthLink="/signin"
        isAuthButtonText="Войти"
      >
        <LabelInputForm
          values={values}
          errors={errors}
          handleChange={handleChange}
          text="Имя"
          name="userName"
          type="text"
          placeholder="Имя пользователя"
          minLength="2"
          maxLength="30"
          required
        />
        <LabelInputForm
          values={values}
          errors={errors}
          handleChange={handleChange}
          text="E-mail"
          name="email"
          type="email"
          placeholder="mail@example.com"
          required
        />
        <LabelInputForm
          values={values}
          errors={errors}
          handleChange={handleChange}
          text="Пароль"
          name="password"
          type="password"
          required
        />
      </FormAuth>
    </PageLayout>
  );
};

export default Register;

import React from 'react';
import { useFormValidation } from '../../hooks/useFormValidation';
import PageLayout from '../components/PageLayout/PageLayout';
import LabelInputForm from '../../components/LabelInputForm/LabelInputForm';
import './Login.css';
import FormAuth from '../../modules/FormAuth/FormAuth';

const Login = ({ onFormSubmit }) => {
  const { values, errors, isValid, handleChange } = useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.email || !values.password) {
      return;
    }
    // onFormSubmit(values.userName, values.email, values.password);
  };

  return (
    <PageLayout isHeader={false} isFooter={false}>
      <FormAuth
        onSubmit={handleSubmit}
        title="Рады видеть!"
        buttonSubmitText="Войти"
        isButtonSubmitActive={isValid}
        isAuthText="Ещё не зарегистрированы?&nbsp;"
        isAuthLink="/signup"
        isAuthButtonText="Регистрация"
      >
        <LabelInputForm
          values={values}
          errors={errors}
          handleChange={handleChange}
          text="E-mail"
          name="email"
          type="email"
          placeholder="mail@example.com"
          required={true}
        />
        <LabelInputForm
          values={values}
          errors={errors}
          handleChange={handleChange}
          text="Пароль"
          name="password"
          type="password"
          required={true}
        />
      </FormAuth>
    </PageLayout>
  );
};

export default Login;

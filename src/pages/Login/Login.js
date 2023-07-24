import React, { useContext, useState } from 'react';
import { useFormValidation } from '../../utils/hooks/useFormValidation';
import PageLayout from '../components/PageLayout/PageLayout';
import LabelInputForm from '../../components/LabelInputForm/LabelInputForm';
import './Login.css';
import FormAuth from '../../modules/FormAuth/FormAuth';
import * as api from '../../utils/api/MainApi';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
  const [areFieldsBlocked, setAreFieldsBlocked] = useState(false);
  const { values, errors, isValid, handleChange } = useFormValidation();
  const { setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogin(email, password) {
    api.login(email, password)
      .then((data) => {
        if (data?.token) {
          localStorage.setItem('token', data.token);
          api.getUserInfo()
            .then((res) => {
              if (res) {
                setCurrentUser(res);
                navigate('/movies', { replace: true });
              }
            })
        } else {
          alert('Что-то пошло не так, немного подождите и попробуйте войти снова');
        }
      })
      .finally(() => setAreFieldsBlocked(false));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.email || !values.password) {
      return;
    }
    setAreFieldsBlocked(prev => !prev);
    handleLogin(values.email, values.password);
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
        isBlocked={areFieldsBlocked}
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
          isBlocked={areFieldsBlocked}
        />
        <LabelInputForm
          values={values}
          errors={errors}
          handleChange={handleChange}
          text="Пароль"
          name="password"
          type="password"
          required={true}
          isBlocked={areFieldsBlocked}
        />
      </FormAuth>
    </PageLayout>
  );
};

export default Login;

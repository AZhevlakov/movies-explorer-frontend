import React, { useContext } from 'react';
import { useFormValidation } from '../../utils/hooks/useFormValidation';
import PageLayout from '../components/PageLayout/PageLayout';
import LabelInputForm from '../../components/LabelInputForm/LabelInputForm';
import './Register.css';
import FormAuth from '../../modules/FormAuth/FormAuth';
import * as api from '../../utils/api/MainApi';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {
  const { values, errors, isValid, handleChange } = useFormValidation();
  const { setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleRegister(userName, email, password) {
    api.register(userName, email, password)
      .then((res) => {
        if (res?.email) {
          handleLogin(res.email, password);
        }
      });
  }

  function handleLogin(email, password) {
    api.login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          api.getUserInfo()
            .then((res) => {
              if (res) {
                setCurrentUser(res);
                navigate('/movies', { replace: true });
              }
            })
        }
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.userName || !values.email || !values.password) {
      return;
    }
    handleRegister(values.userName, values.email, values.password);
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
          required={true}
        />
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

export default Register;

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import Title from '../../UI/Title/Title';
import ButtonForm from '../../UI/Button/ButtonForm/ButtonForm';
import './FormAuth.css';

const FormAuth = ({ children, onSubmit, title, buttonSubmitText, isButtonSubmitActive, isAuthText, isAuthLink, isAuthButtonText, isBlocked = false }) => {
  return (
    <section className="auth">
      <Logo />
      <Title className="auth__title">{title}</Title>
      <form
        onSubmit={onSubmit}
        className="form-auth"
        name="signup"
        noValidate
        autoComplete="off"
      >
        <div>
          {children}
        </div>
        <div>
          <ButtonForm className="form-auth__button-submit" text={buttonSubmitText} isActive={isButtonSubmitActive} isBlocked={isBlocked} />
          <div className="form-auth__signin">
            <p className="form-auth__is-register">{isAuthText}</p>
            <Link to={isAuthLink} className="link form-auth__signin-link">{isAuthButtonText}</Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default FormAuth;

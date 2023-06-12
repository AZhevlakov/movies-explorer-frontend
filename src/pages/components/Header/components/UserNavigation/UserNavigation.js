import './UserNavigation.css';
import React from 'react';
import { Link } from 'react-router-dom';

const UserNavigation = () => {
  return (
    <>
      <Link to="/signup" className="link header__signup">
        {"Регистрация"}
      </Link>
      <Link to="/signin" className="link header__signin">
        {'Войти'}
      </Link>
    </>
  );
};

export default UserNavigation;

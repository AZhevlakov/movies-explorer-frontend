import './Logo.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';

const Logo = () => {
  return (
    <Link to="/" className="link logo">
      <img className="logo__img" src={logo} alt="Логотип Movies-explorer" />
    </Link>
  );
};

export default Logo;

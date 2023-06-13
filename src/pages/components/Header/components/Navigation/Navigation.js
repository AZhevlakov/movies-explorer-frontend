import './Navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ isBurgerOpen }) => {
  return (
    <>
      <ul className="header__nav">
        {
          isBurgerOpen
          &&
          <li className="header__nav-item">
            <Link to="/" className="link header__nav-link">
              {"Главная"}
            </Link>
          </li>
        }
        <li className="header__nav-item">
          <Link to="/movies" className="link header__nav-link">
            {"Фильмы"}
          </Link>
        </li>
        <li className="header__nav-item">
          <Link to="/saved-movies" className="link header__nav-link">
            {"Сохранённые фильмы"}
          </Link>
        </li>
      </ul>
      <Link to="/profile" className="link header__button-profile">
        {'Аккаунт'}
      </Link>
    </>
  );
};

export default Navigation;

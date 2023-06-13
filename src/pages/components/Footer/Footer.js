import './Footer.css';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section footer__container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__content">
          <p className="footer__copyright">
            {`© ${new Date().getFullYear()}`}
          </p>
          <ul className="footer__links">
            <li>
              <a className="link footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
            </li>
            <li>
              <a className="link footer__link" href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';
import React from 'react';
import foto from '../../../../assets/images/temp-image.jpg';

const AboutMe = () => {
  return (
    <section className="section about-me">
      <h2 className="about-me__block-title">Студент</h2>
      <div className="about-me__info">
        <div className="about-me__description">
          <div>
            <h3 className="about-me__name">Алексей</h3>
            <p className="about-me__job">Фронтенд-разработчик, 33 года</p>
            <p className="about-me__about">
              Я родился и живу в Кировской области. Закончил ФПМТ ВятГУ.
              У меня есть жена, дочь и сын.
              После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами.
            </p>
          </div>
          <a className="link about-me__github" href="https://github.com/AZhevlakov" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <img className="about-me__image" src={foto} alt="Фото автора" />
      </div>
      <Portfolio />
    </section>
  );
};

export default AboutMe;

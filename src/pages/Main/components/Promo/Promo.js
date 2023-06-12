import './Promo.css';
import React from 'react';

const Promo = () => {
  return (
    <section className="section promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
      <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <a href="#know-more" className="link promo__know-more">Узнать больше</a>
      <div className="promo__image" />
    </section>
  );
};

export default Promo;

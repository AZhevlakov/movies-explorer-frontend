import './AboutProject.css';
import React from 'react';

const AboutProject = () => {
  return (
    <section id="know-more" className="section about-project">
      <h2 className="about-project__block-title" id="know-more">О проекте</h2>
      <ul className="about-project__description">
        <li>
          <h3 className="about-project__description-title">Дипломный проект включал 5&nbsp;этапов</h3>
          <p className="about-project__description-text">Составление плана, работу над&nbsp;бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
        </li>
        <li>
          <h3 className="about-project__description-title">На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
          <p className="about-project__description-text">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className="about-project__graph">
        <li className="about-project__graph-item-1">
          <span className="about-project__graph-marker-1">1&nbsp;неделя</span>
          <p className="about-project__graph-name">Back-end</p>
        </li>
        <li className="about-project__graph-item-2">
          <span className="about-project__graph-marker-2">4&nbsp;недели</span>
          <p className="about-project__graph-name">Front-end</p>
        </li>
      </ul>
    </section>
  );
};

export default AboutProject;

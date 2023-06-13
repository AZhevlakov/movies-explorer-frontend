import './PageNotFound.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout/PageLayout';

const PageNotFound = () => {
  return (
    <PageLayout isHeader={false} isFooter={false}>
      <section className="page-not-found">
        <h1 className="page-not-found__error-title">404</h1>
        <p className="page-not-found__error-description">Страница не найдена</p>
        <Link to={-1} className="link page-not-found__link-back">Назад</Link>
      </section>
    </PageLayout>
  );
};

export default PageNotFound;

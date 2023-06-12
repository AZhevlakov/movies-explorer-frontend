import './Movies.css';
import React from 'react';
import PageLayout from '../components/PageLayout/PageLayout';
import MoviesCardList from '../../modules/MoviesCardList/MoviesCardList';
import SearchForm from '../../modules/SearchForm/SearchForm';

const Movies = () => {
  return (
    <PageLayout>
      <SearchForm />
      <MoviesCardList />
    </PageLayout>
  );
};

export default Movies;

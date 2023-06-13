import './SavedMovies.css';
import React from 'react';
import PageLayout from '../components/PageLayout/PageLayout';
import MoviesCardList from '../../modules/MoviesCardList/MoviesCardList';
import SearchForm from '../../modules/SearchForm/SearchForm';

const SavedMovies = () => {
  return (
    <PageLayout>
      <SearchForm />
      <MoviesCardList isSaved={true} />
    </PageLayout>
  );
};

export default SavedMovies;

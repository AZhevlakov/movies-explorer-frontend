import './SavedMovies.css';
import React, { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout/PageLayout';
import MoviesCardList from '../../modules/MoviesCardList/MoviesCardList';
import SearchForm from '../../modules/SearchForm/SearchForm';
import * as api from '../../utils/api/MainApi';
import searchMovies from '../../utils/features/searchMovies';

const SavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    getSavedMovies();
  }, []);

  const getSavedMovies = () => {
    api.getMovies()
      .then((res) => {
        setSavedMovies(res);
        setSearchedMovies(res);
      });
  };

  const handleSearchFormSubmit = (searchLineValue, isShortMovies) => {
    const searchResult = searchMovies(savedMovies, searchLineValue, isShortMovies);
    setSearchedMovies(searchResult);
  };

  return (
    <PageLayout>
      <SearchForm
        onSearch={handleSearchFormSubmit}
      />
      <MoviesCardList
        movies={searchedMovies}
        isSavedMoviesPage={true}
        setSavedMovies={setSavedMovies}
        setSearchedMovies={setSearchedMovies}
      />
    </PageLayout>
  );
};

export default SavedMovies;

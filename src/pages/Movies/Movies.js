import './Movies.css';
import React, { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout/PageLayout';
import MoviesCardList from '../../modules/MoviesCardList/MoviesCardList';
import SearchForm from '../../modules/SearchForm/SearchForm';
import * as moviesApi from '../../utils/api/MoviesApi';
import * as api from '../../utils/api/MainApi';
import Preloader from '../../components/Preloader/Preloader';
import searchMovies from '../../utils/features/searchMovies';
import convertMovies from '../../utils/features/convertMovies';
import compareWithFavoriteMovies from '../../utils/features/compareWithFavoriteMovies';

const Movies = () => {
  const [isNoSearch, setIsNoSearch] = useState(true);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShort, setIsShort] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('searchedMovies')) {
      setIsNoSearch(false);
      setSearchedMovies(JSON.parse(localStorage.getItem('searchedMovies')));
      setIsShort(localStorage.getItem('isShortMovies') === 'true' ? true : false);
    }
  }, []);

  const handleSearchFormSubmit = (searchLineValue, isShortMovies) => {
    setIsLoading(prev => !prev);
    let searchResult = [];
    if (isNoSearch) {
      moviesApi.getMovies()
        .then((movies) => {
          movies = convertMovies(movies);
          api.getMovies()
            .then((likedMovies) => {
              movies = compareWithFavoriteMovies(movies, likedMovies);

              searchResult = searchMovies(movies, searchLineValue, isShortMovies);
              setSearchedMovies(searchResult);

              localStorage.setItem('movies', JSON.stringify(movies));
              localStorage.setItem('searchedMovies', JSON.stringify(searchResult));
              setIsNoSearch(false);
            })
            .finally(setIsLoading(false));
        });
    } else {
      searchResult = searchMovies(JSON.parse(localStorage.getItem('movies')), searchLineValue, isShortMovies);
      setSearchedMovies(searchResult);
      localStorage.setItem('searchedMovies', JSON.stringify(searchResult));
      setIsLoading(false);
    }
    localStorage.setItem('searchLineValue', searchLineValue);
    localStorage.setItem('isShortMovies', JSON.stringify(isShortMovies));
  };

  return (
    <PageLayout>
      <SearchForm
        onSearch={handleSearchFormSubmit}
        searchLineValue={localStorage.getItem('searchLineValue') ?? ''}
        toggle={isShort}
      />
      {
        isLoading ?
          (<Preloader />)
          :
          (!isNoSearch && <MoviesCardList movies={searchedMovies} />)
      }
    </PageLayout>
  );
};

export default Movies;

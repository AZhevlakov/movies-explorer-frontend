import './MoviesCard.css';
import React, { useEffect, useState } from 'react';
import * as api from '../../utils/api/MainApi';

const MoviesCard = ({ card, isSavedMoviesPage = false, setSavedMovies, setSearchedMovies, setPopupOpen, setCardWithTrailer }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [cardLikeButtonClassName, setCardLikeButtonClassName] = useState('');

  useEffect(() => {
    if (!isSavedMoviesPage) {
      const movies = JSON.parse(localStorage.getItem('movies'));
      const index = movies.findIndex((movie) => movie.id === card.id);
      setIsLiked(movies[index].isLiked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCardLikeButtonClassName(`link ${!isSavedMoviesPage ? ('card__like' + (isLiked ? ' card__like_active' : '')) : 'card__dislike'}`);
  }, [isSavedMoviesPage, isLiked])

  const formatDuration = (duration) => {
    const minutes = duration % 60;
    const hours = (duration - minutes) / 60;
    return `${hours ? (hours + 'ч') : ''} ${minutes ? (minutes + 'м') : ''}`;
  };

  const handleCardClick = () => {
    setCardWithTrailer(card);
    setPopupOpen(true);
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();

    if (isLiked || isSavedMoviesPage) {
      api.deleteMovie(card._id)
        .then(() => {
          setIsLiked(false);
          if (isSavedMoviesPage) {
            setSavedMovies((state) => state.filter((c) => c._id !== card._id));
            setSearchedMovies((state) => state.filter((c) => c._id !== card._id));
          }
          const movies = JSON.parse(localStorage.getItem('movies'));
          const currentMovie = movies.find((movie) => movie._id === card._id);
          currentMovie.isLiked = false;
          delete currentMovie._id;

          localStorage.setItem('movies', JSON.stringify(movies));
        });
    } else {
      api.createMovie(card)
        .then((res) => {
          setIsLiked(true);
          card._id = res._id;
          const movies = JSON.parse(localStorage.getItem('movies'));
          const index = movies.findIndex((movie) => movie.id === res.movieId);
          movies[index].isLiked = true;
          movies[index]._id = res._id;

          localStorage.setItem('movies', JSON.stringify(movies));
        });
    }
  };

  return (
    <li className="card" onClick={handleCardClick}>
      <div className="card__info">
        <div className="card__description">
          <h2 className="card__name">
            {card.nameRU}
          </h2>
          <p className="card__duration">
            {formatDuration(card.duration)}
          </p>
        </div>
        <button
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
          type="button"
          aria-label="Избранное"
        />
      </div>
      <img
        className="card__image"
        src={card.image}
        alt={card.nameRU}
      />
    </li>
  );
};

export default MoviesCard;

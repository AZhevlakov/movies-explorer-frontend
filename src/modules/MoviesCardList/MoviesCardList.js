import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../../components/MoviesCard/MoviesCard';

const MoviesCardList = ({ movies, isSaved }) => {
  return (
    <section className="section card-list" aria-label="Галерея фотографий">
      <ul className="card-list__items">
        {/* {movies.map((card) => (

        ))} */}
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
      </ul>
      <button className="card-list__more">Ещё</button>
    </section>
  );
};

export default MoviesCardList;

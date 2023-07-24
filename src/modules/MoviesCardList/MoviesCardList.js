import React, { useEffect, useState } from 'react';
import MoviesCard from '../../components/MoviesCard/MoviesCard';
import PopupTrailer from '../../components/Popups/PopupTrailer/PopupTrailer';
import NothingFound from '../../components/NothingFound/NothingFound';
import './MoviesCardList.css';

const MoviesCardList = ({ movies, isSavedMoviesPage, setSavedMovies, setSearchedMovies }) => {
  const [isPopupTrailerOpen, setIsPopupTrailerOpen] = useState(false);
  const [trailer, setTrailer] = useState({});
  const [more, setMore] = useState(false);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);

  const getCurrentWidth = () => {
    const isDesktop = window.innerWidth > 768;
    const isMobile = window.innerWidth < 500;
    return isDesktop ? 12 : (isMobile ? 5 : 8);
  };

  const [numberOfMoviesDisplayed, setNumberOfMoviesDisplayed] = useState(getCurrentWidth);

  function onClosePopupTrailer() {
    setIsPopupTrailerOpen(false);
    setTrailer({});
  }

  useEffect(() => {
    if (movies?.length) {
      setNothingFound(false);
      const handleResize = () => {
        const timeout = setTimeout(() => {
          clearTimeout(timeout);
          setNumberOfMoviesDisplayed(getCurrentWidth);
        }, 100);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    } else {
      setNothingFound(true);
    }
  }, [movies]);

  useEffect(() => {
    if (movies?.length) {
      let number;
      if (movies.length > numberOfMoviesDisplayed) {
        number = numberOfMoviesDisplayed;
        setNumberOfMoviesDisplayed(number);
        setMore(true);
      } else {
        number = movies.length;
        setMore(false);
      }
      setDisplayedMovies(movies.slice(0, numberOfMoviesDisplayed));
    }
  }, [movies, numberOfMoviesDisplayed]);

  const handleMoreClick = () => {
    let addNumber = (window.innerWidth > 768) ? 3 : 2;
    if (movies.length > (numberOfMoviesDisplayed + addNumber)) {
      setNumberOfMoviesDisplayed(prev => (prev + addNumber));
      setMore(true);
    } else {
      setNumberOfMoviesDisplayed(movies.length);
      setMore(false);
    }
  };

  return (
    <>
      {
        nothingFound ?
          <NothingFound />
          :
          <>
            <section className="section card-list" aria-label="Галерея фотографий">

              <ul className="card-list__items">
                {displayedMovies.map((movie) => (
                  <MoviesCard
                    key={movie.id || movie.movieId}
                    card={movie}
                    isSavedMoviesPage={isSavedMoviesPage}
                    setSavedMovies={setSavedMovies}
                    setSearchedMovies={setSearchedMovies}
                    setPopupOpen={setIsPopupTrailerOpen}
                    setCardWithTrailer={setTrailer}
                  />)
                )}
              </ul>

              {more && <button onClick={handleMoreClick} className="button card-list__more">Ещё</button>}
            </section>
            <PopupTrailer
              isOpen={isPopupTrailerOpen}
              onClose={onClosePopupTrailer}
              card={trailer}
            />
          </>
      }
    </>
  );
};

export default MoviesCardList;

export default function searchMovies(movies, searchQuery, isShortMovies) {
  let searchedMovies = movies.filter((movie) => movie.nameRU.toLowerCase().includes(searchQuery.trim().toLowerCase()));

  if (isShortMovies) {
    searchedMovies = searchedMovies.filter((movie) => (movie.duration <= 40));
  }

  return searchedMovies;
}

export default function compareWithFavoriteMovies(movies, likedMovies) {
  likedMovies.forEach(likedMovie => {
    const currentMovie = movies.find((movie) => movie.id === likedMovie.movieId);
    currentMovie.isLiked = true;
    currentMovie._id = likedMovie._id;
  });
  return movies;
}

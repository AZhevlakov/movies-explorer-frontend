export default function convertMovies(movies) {
  return movies.map(movie => {
    return {
      id: movie.id,
      nameRU: movie.nameRU,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      duration: movie.duration,
      isLiked: false,
    }
  });
}

export const mapToSavedMovies = ({ id, created_at, updated_at, ...movie }) => {
  return {
    ...movie,
    thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
    image: `https://api.nomoreparties.co${movie.image.url}`,
    movieId: id,
  };
};

export const mapToNoMoreSavedMovies = (movie) => {
  return {
    ...movie,
    image: {
      url: movie.image,
      previewUrl: movie.image,
    },
    id: movie.movieId,
  };
};

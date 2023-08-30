import { MOVIES_IMAGE_URL } from "./constants";

export const mapToSavedMovies = ({ id, created_at, updated_at, ...movie }) => {
  return {
    ...movie,
    thumbnail: `${MOVIES_IMAGE_URL}${movie.image.url}`,
    image: `${MOVIES_IMAGE_URL}${movie.image.url}`,
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

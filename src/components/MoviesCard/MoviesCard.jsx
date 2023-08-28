import { useContext } from "react";
import "./MoviesCard.css";
import Button from "../Button/Button";
import { AppContext } from "../../contexts/AppContext";
import { useCallback } from "react";
import { MINUTES_IN_HOUR } from "../../utils/constants";

function MoviesCard({ movie, isSaved, canDeleteMovie, handleDeleteMovie, handleSaveMovie }) {
  const savingMovies = useContext(AppContext);

  function getDuration() {
    if (movie.duration < MINUTES_IN_HOUR) {
      return `${movie.duration % MINUTES_IN_HOUR}м`;
    } else {
      return `${Math.floor(movie.duration / MINUTES_IN_HOUR)}ч ${movie.duration % MINUTES_IN_HOUR}м`;
    }
  }

  const isSavingMovie = useCallback(() => {
    console.log(savingMovies);
    return savingMovies.some((savingMovies) => savingMovies.movieId === movie.movieId)
  }, [savingMovies, movie.movieId]);

  return (
    <article className="movie">
      <div className="movie__link">
      <a href={movie.trailerLink} target="Трейлер фильма">
            <div className="movie__img"
            style={{
              backgroundImage: `url(${movie.image})`,
            }}></div>
      </a>
      {canDeleteMovie ? (
        <Button className="movie__delete-button" iconButton={true} onClick={() => handleDeleteMovie(movie)} disabled={isSavingMovie()}/>
      ) : isSaved ? (
        <Button className="movie__saved-button" iconButton={true} onClick={() => handleDeleteMovie(movie)} disabled={isSavingMovie()}/>
      ) : (
        <Button text="Сохранить" className="movie__save-button" onClick={() => handleSaveMovie(movie)} disabled={isSavingMovie()}/>
      )}
      </div>
      <div className="movie__caption">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <p className="movie__time">{getDuration()}</p>
      </div>
    </article>
  );
}

export default MoviesCard;

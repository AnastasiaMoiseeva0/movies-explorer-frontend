import "./MoviesCard.css";
import Button from "../Button/Button";

function MoviesCard({ movie, isSaved, canDeleteMovie, handleDeleteMovie, handleSaveMovie }) {
  function getDuration() {
    if (movie.duration < 60) {
      return `${movie.duration % 60}м`;
    } else {
      return `${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`;
    }
  }

  return (
    <article className="movie">
      <a href={movie.trailerLink} target="Трейлер фильма" 
          className="movie__img"
          style={{
            backgroundImage: `url(${movie.image})`,
          }}>
      </a>
      {canDeleteMovie ? (
        <Button className="movie__delete-button" iconButton={true} onClick={() => handleDeleteMovie(movie)}/>
      ) : isSaved ? (
        <Button className="movie__saved-button" iconButton={true} onClick={() => handleDeleteMovie(movie)}/>
      ) : (
        <Button text="Сохранить" className="movie__save-button" onClick={() => handleSaveMovie(movie)} />
      )}
      <div className="movie__caption">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <p className="movie__time">{getDuration()}</p>
      </div>
    </article>
  );
}

export default MoviesCard;

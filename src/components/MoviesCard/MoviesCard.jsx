import "./MoviesCard.css";
import Button from "../Button/Button";

function MoviesCard({ movie, isSaved, canDeleteMovie }) {
  function getDuration() {
    if(movie.duration < 60) {
      return `${movie.duration % 60}м`
    } else {
    return `${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`
    }
  }

  return (
    <article className="movie">
      <div style={{ backgroundImage: `url(https://api.nomoreparties.co${movie.image.url})` }} className="movie__img"></div>
      {canDeleteMovie ? (
        <Button className="movie__delete-button" iconButton={true} />
      ) : isSaved ? (
        <Button text="Сохранить" className="movie__save-button" />
      ) : (
        <Button className="movie__saved-button" iconButton={true} />
      )}
      <div className="movie__caption">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <p className="movie__time">{getDuration()}</p>
      </div>
    </article>
  );
}

export default MoviesCard;

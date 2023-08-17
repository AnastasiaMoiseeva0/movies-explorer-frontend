import "./MoviesCard.css";
import Button from "../Button/Button";

function MoviesCard({ movie, isSaved, canDeleteMovie }) {

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
        <p className="movie__time">{movie.duration}</p>
      </div>
    </article>
  );
}

export default MoviesCard;

import "./MoviesCard.css";
import movieImg from "../../images/movie-img.jpg";
import Button from "../Button/Button";

function MoviesCard({ isSaved, canDeleteMovie }) {
  return (
    <article className="movie__container">
      <img src={movieImg} alt="Изображение фильма" className="movie__img" />

      {canDeleteMovie ? (
        <Button className="movie__delete-button" iconButton="icon" />
      ) : isSaved ? (
        <Button text="Сохранить" className="movie__save-button" />
      ) : (
        <Button className="movie__saved-button"  iconButton="icon" />
      )}
      <div className="movie__caption">
        <h2 className="movie__title">Книготорговцы</h2>
        <p className="movie__time">1ч 17м</p>
      </div>
    </article>
  );
}

export default MoviesCard;

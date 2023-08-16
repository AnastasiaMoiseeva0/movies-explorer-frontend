import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";

function MoviesCardList({ canDeleteMovie }) {
  return (
    <section className="movies">
      <div className="movies__list">
        <MoviesCard isSaved={false} canDeleteMovie={canDeleteMovie} />
        <MoviesCard isSaved={true} canDeleteMovie={canDeleteMovie} />
        <MoviesCard isSaved={false} canDeleteMovie={canDeleteMovie} />
        <MoviesCard isSaved={false} canDeleteMovie={canDeleteMovie} />
        <MoviesCard isSaved={true} canDeleteMovie={canDeleteMovie} />
        <MoviesCard isSaved={false} canDeleteMovie={canDeleteMovie} />
        <MoviesCard isSaved={true} canDeleteMovie={canDeleteMovie} />
        <MoviesCard isSaved={false} canDeleteMovie={canDeleteMovie} />
        <MoviesCard isSaved={true} canDeleteMovie={canDeleteMovie} />
        <MoviesCard isSaved={false} canDeleteMovie={canDeleteMovie} />
        <MoviesCard isSaved={true} canDeleteMovie={canDeleteMovie} />
        <MoviesCard isSaved={false} canDeleteMovie={canDeleteMovie} />
      </div>
      <div className="movies__button">
        <Button text="Ещё" className="movies__more-button" />
      </div>
    </section>
  );
}

export default MoviesCardList;

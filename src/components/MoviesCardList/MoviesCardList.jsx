import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";

function MoviesCardList({ canDeleteMovie, filtredMovies }) {
  return (
    <section className="movies">
      <div className="movies__list">
      {
        filtredMovies.map((movie) => <MoviesCard key={movie._id} movie={movie} isSaved={false} canDeleteMovie={canDeleteMovie}/>)
      }
      </div>
      <div className="movies__button">
        <Button text="Ещё" className="movies__more-button" />
      </div>
    </section>
  );
}

export default MoviesCardList;

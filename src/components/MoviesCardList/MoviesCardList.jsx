import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";

function MoviesCardList() {
    return (
      <section className="movies">
        <div className="movies__list">
        <MoviesCard isSaved={false} />
        <MoviesCard isSaved={true} />
        <MoviesCard isSaved={false} />
        <MoviesCard isSaved={false} />
        </div>
        <div className="movies__button">
        <Button text="Ещё" className="movies__more-button"/>
        </div>
      </section>
    );
  }
  
  export default MoviesCardList;
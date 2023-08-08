import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({canDeleteMovie}) {
  return (
    <section className="movies">
        <SearchForm />
        <MoviesCardList canDeleteMovie={false}/>
    </section>
  );
}

export default Movies;
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({canDeleteMovie}) {
    return(
        <section>
        <SearchForm />
        <MoviesCardList canDeleteMovie={true}/>
        </section>
    )
}

export default SavedMovies;
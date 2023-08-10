import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies() {
    return(
        <section>
        <Header isAuthorization={true} />
        <SearchForm />
        <MoviesCardList canDeleteMovie={true}/>
        <Footer />
        </section>
    )
}

export default SavedMovies;
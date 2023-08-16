import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies() {
  return (
    <>
      <Header isAuthorization={true} />
      <main>
        <SearchForm />
        <MoviesCardList canDeleteMovie={true} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;

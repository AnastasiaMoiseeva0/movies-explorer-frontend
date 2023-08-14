import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies() {
  return (
    <>
      <Header isAuthorization={true} />
      <main>
        <SearchForm />
        <MoviesCardList canDeleteMovie={false} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;

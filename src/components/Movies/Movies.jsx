import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSearch } from "../../hooks/useSearch";
import Preloader from "../Preloader/Preloader";

function Movies() {
  const {doSearch, filteredMovies, isLoading } = useSearch({});


  return (
    <>
      <Header isAuthorization={true} />
      <main>
        <SearchForm onSearch={doSearch}/>
        { isLoading
          ? <Preloader />
          :
          <MoviesCardList canDeleteMovie={false} filtredMovies={filteredMovies} /> }
      </main>
      <Footer />
    </>
  );
}

export default Movies;

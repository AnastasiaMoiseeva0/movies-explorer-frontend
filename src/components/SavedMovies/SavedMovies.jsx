import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { useSearch } from "../../hooks/useSearch";

function SavedMovies({ savedMovies }) {
  const { doSearch, filteredMovies, isLoading } = useSearch({});

  return (
    <>
      <Header isAuthorization={true} />
      <main>
        <SearchForm onSearch={doSearch} />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            canDeleteMovie={true}
            filtredMovies={savedMovies}
            savedMovies={savedMovies}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;

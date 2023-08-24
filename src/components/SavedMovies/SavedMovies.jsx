import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { useSearch } from "../../hooks/useSearch";
import { useEffect } from "react";

function SavedMovies({ savedMovies, handleDeleteMovie }) {
  const { doSearch, isLoading, isError, isEmpty, filteredMovies, setMovies } = useSearch({
    loadFilmsCallback: () => Promise.resolve(savedMovies),
    initialFilms: savedMovies,
    skipFirstSearch: true,
  });

  useEffect(() => {
    setMovies(savedMovies);
  }, [setMovies, savedMovies])

  return (
    <>
      <Header isAuthorization={true} />
      <main>
        <SearchForm onSearch={doSearch} storageKey='savedMovies' />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            canDeleteMovie={true}
            filtredMovies={filteredMovies}
            savedMovies={savedMovies}
            handleDeleteMovie={handleDeleteMovie}
            isError={isError}
            isEmpty={isEmpty}
            withMoreButton={false}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;

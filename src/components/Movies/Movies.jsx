import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSearch } from "../../hooks/useSearch";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/moviesApi";
import { mapToSavedMovies } from "../../utils/mappers";


function Movies({ savedMovies, handleSaveMovie, handleDeleteMovie }) {
  const { doSearch, filteredMovies, isLoading, isError, isEmpty } = useSearch({
    loadFilmsCallback: () => {
      return moviesApi
        .getMovies()
        .then((movies) => {
          return movies.map(movie => mapToSavedMovies(movie));
        })
        .then((movies) => {
          window.localStorage.setItem('movies', JSON.stringify(movies));
          return movies;
        })
        .catch((error) => {console.log(error)});
    },
    initialFilms: JSON.parse(window.localStorage.getItem('movies')),
  });

  return (
    <>
      <Header isAuthorization={true} />
      <main>
        <SearchForm onSearch={doSearch} storageKey='allMovies' />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            canDeleteMovie={false}
            filtredMovies={filteredMovies}
            savedMovies={savedMovies}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
            isError={isError}
            isEmpty={isEmpty}
            withMoreButton={true}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;

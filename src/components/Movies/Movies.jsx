import { useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import moviesApi from "../../utils/moviesApi";

function Movies({ loggedIn }) {
  const [movies, setMovies] = useState(null);
  const [filteredMovies, setFiltredMovies] = useState([]);

  function doSearch(value) {
    if(!movies) {
      loadFilms().then(() => {
        if(movies) {
          doSearch(value);
        }
      });

      return;
    }

    setFiltredMovies(
      movies
        ? movies.filter((movie) => {
            return movie.nameRU.toLowerCase().includes(value.toLowerCase());
          })
        : []
    );
  }

  function loadFilms() {
    return moviesApi
      .getMovies()
      .then((movies) => {
        setMovies(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Header isAuthorization={true} />
      <main>
        <SearchForm onSearch={doSearch} />
        <MoviesCardList canDeleteMovie={false} filtredMovies={filteredMovies} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;

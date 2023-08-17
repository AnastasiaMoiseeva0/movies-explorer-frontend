import { useEffect, useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import moviesApi from "../../utils/moviesApi";

function Movies({loggedIn}) {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if(loggedIn) {
      moviesApi.getMovies()
        .then((movies) => {
          setMovies(movies)
          console.log(movies)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [loggedIn]);

 /* useEffect(() => {
    console.log(search);
    moviesApi.getMovies().then((movie) => setMovies([movie, ...movies]));
  }, [search]); */

  return (
    <>
      <Header isAuthorization={true} />
      <main>
        <SearchForm />
        <MoviesCardList canDeleteMovie={false} movies={movies} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;

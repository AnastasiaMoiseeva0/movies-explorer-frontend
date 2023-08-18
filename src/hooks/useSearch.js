import { useState, useEffect } from "react";
import moviesApi from "../utils/moviesApi";

export function useSearch() {
  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState(null);
  const [activeCheckbox, setActiveCheckbox] = useState(null);
  const [filteredMovies, setFiltredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  const doSearch = (search, activeCheckbox) => {
    setSearch(search);
    setActiveCheckbox(activeCheckbox);
  };

  const loadFilms = () => {
    return moviesApi
      .getMovies()
      .then((movies) => {
        setMovies(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (search) {
      setIsLoading(true);
      if (!movies) {
        loadFilms();
        return;
      }
    }

    setFiltredMovies(
      movies
        ? movies
            .filter((movie) => {
              return movie.nameRU.toLowerCase().includes(search.toLowerCase());
            })
            .filter((movie) => {
              return activeCheckbox ? movie.duration <= 40 : true;
            })
        : []
    );
    setIsLoading(false);
  }, [movies, search, activeCheckbox]);

  return { doSearch, filteredMovies, isLoading };
}

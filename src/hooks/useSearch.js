import { useState, useEffect } from "react";

export function useSearch({
  loadFilmsCallback,
  initialFilms,
  skipFirstSearch,
}) {
  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState(null);
  const [activeCheckbox, setActiveCheckbox] = useState(null);
  const [filteredMovies, setFiltredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [hasFirstSearch, setHasFirstSearch] = useState(skipFirstSearch);

  const doSearch = (search, activeCheckbox) => {
    setSearch(search);
    setActiveCheckbox(activeCheckbox);
    setHasFirstSearch(true);
  };

  const loadFilms = () => {
    setIsError(false);

    loadFilmsCallback()
      .then((movies) => {
        setMovies(movies);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!hasFirstSearch) {
      return;
    }

    if (search) {
      setIsLoading(true);
      if (!movies) {
        loadFilms();
        return;
      }
    }

    let filteredMovies = movies || [];

    if (movies) {
      if (search) {
        filteredMovies = filteredMovies.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(search.toLowerCase());
        });
      }
      if (activeCheckbox) {
        filteredMovies = filteredMovies.filter((movie) => {
          return activeCheckbox ? movie.duration <= 40 : true;
        });
      }
    }

    setFiltredMovies(filteredMovies);
    setIsLoading(false);
    setIsEmpty(filteredMovies.length === 0);
  }, [movies, search, activeCheckbox, hasFirstSearch]);

  return { doSearch, filteredMovies, isLoading, isError, isEmpty, setMovies };
}

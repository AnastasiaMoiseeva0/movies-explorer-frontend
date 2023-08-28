import { useState, useEffect, useCallback } from "react";
import useDebouncedFunction from "../../hooks/useDebouncedFunction";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import {
  MAX_WINDOW_SIZE,
  MEDIUM_WINDOW_SIZE,
  MIN_WINDOW_SIZE,
  CARDS_COUNT_MAX_WINDOW_SIZE,
  CARDS_COUNT_MIN_WINDOW_SIZE,
  CARDS_NEXT_COUNT_MAX_WINDOW_SIZE,
  CARDS_NEXT_COUNT_MEDIUM_WINDOW_SIZE,
  CARDS_NEXT_COUNT_MIN_WINDOW_SIZE,
} from "../../utils/constants";

function MoviesCardList({
  canDeleteMovie,
  filtredMovies,
  savedMovies,
  isLoading,
  handleSaveMovie,
  handleDeleteMovie,
  isError,
  isEmpty,
  withMoreButton,
}) {
  const [visibleCards, setVisibleCards] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const debouncedWindowWidth = useDebouncedFunction(setWindowWidth, 300);
  const [itemsInRow, setItemsInRow] = useState(0);
  const [initialRows, setInitialRows] = useState(0);

  useEffect(() => {
    setItemsInRow(getItemsInRow(window.innerWidth));
    setInitialRows(getInitialRows(window.innerWidth));
  }, [filtredMovies]);

  function getInitialRows(windowWidth) {
    if (windowWidth >= MAX_WINDOW_SIZE) {
      return CARDS_COUNT_MAX_WINDOW_SIZE;
    } else if (windowWidth >= MEDIUM_WINDOW_SIZE) {
      return CARDS_COUNT_MAX_WINDOW_SIZE;
    } else if (windowWidth >= MIN_WINDOW_SIZE) {
      return CARDS_COUNT_MIN_WINDOW_SIZE;
    }
  }

  function getItemsInRow(windowWidth) {
    if (windowWidth >= MAX_WINDOW_SIZE) {
      return CARDS_NEXT_COUNT_MAX_WINDOW_SIZE;
    } else if (windowWidth >= MEDIUM_WINDOW_SIZE) {
      return CARDS_NEXT_COUNT_MEDIUM_WINDOW_SIZE;
    } else if (windowWidth >= MIN_WINDOW_SIZE) {
      return CARDS_NEXT_COUNT_MIN_WINDOW_SIZE;
    }
  }

  useEffect(() => {
    setVisibleCards(
      withMoreButton
        ? filtredMovies.slice(0, itemsInRow * initialRows)
        : filtredMovies
    );
  }, [filtredMovies, itemsInRow, initialRows, withMoreButton]);

  const onMoreClick = useCallback(() => {
    const itemsToAdd =
      windowWidth >= MAX_WINDOW_SIZE
        ? CARDS_NEXT_COUNT_MAX_WINDOW_SIZE
        : CARDS_NEXT_COUNT_MEDIUM_WINDOW_SIZE;

    setVisibleCards(filtredMovies.slice(0, visibleCards.length + itemsToAdd));
  }, [windowWidth, filtredMovies, visibleCards]);

  const handleResize = useCallback(() => {
    debouncedWindowWidth(window.innerWidth);
  }, [debouncedWindowWidth]);

  const deleteMovie = useCallback((movie) => {
    handleDeleteMovie(
      savedMovies.find(
        (savedMovie) => savedMovie.movieId === movie.movieId
      )
    )
  }, [savedMovies])

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <section className="movies">
      {isError ? (
        <p className="movies__search">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      ) : !isLoading && isEmpty ? (
        <p className="movies__search">Ничего не найдено</p>
      ) : null}
      <div className="movies__list">
        {visibleCards.map((movie) => (
          <MoviesCard
            key={movie.movieId}
            movie={movie}
            isSaved={savedMovies.some(
              (savedMovie) => savedMovie.movieId === movie.movieId
            )}
            canDeleteMovie={canDeleteMovie}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={(movie) =>
              deleteMovie(movie)
            }
          />
        ))}
      </div>
      <div className="movies__button">
        {withMoreButton && visibleCards.length < filtredMovies.length ? (
          <Button
            text="Ещё"
            className="movies__more-button"
            onClick={onMoreClick}
          />
        ) : null}
      </div>
    </section>
  );
}

export default MoviesCardList;

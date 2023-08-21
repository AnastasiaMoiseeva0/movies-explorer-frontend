import { useState, useEffect, useCallback } from "react";
import useDebouncedFunction from '../../hooks/useDebouncedFunction';
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";

function MoviesCardList({ canDeleteMovie, filtredMovies }) {
  const [visibleCards, setVisibleCards] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const debouncedWindowWidth = useDebouncedFunction(windowWidth, 300);
  const [itemsInRow, setItemsInRow] = useState(0);
  const [initialRows, setInitialRows] = useState(0);

  useEffect(() => {
    setItemsInRow(getItemsInRow(window.innerWidth));
    setInitialRows(getInitialRows(window.innerWidth));
  }, [filtredMovies])

  function getInitialRows(windowWidth) {
    if (windowWidth >= 1280) {
     return 4;
    } else if (windowWidth >= 768) {
      return 4;
    } else if (windowWidth >= 320) {
      return 5;
    }
  }

  function getItemsInRow(windowWidth) {
    if (windowWidth >= 1280) {
     return 3;
    } else if (windowWidth >= 768) {
      return 2;
    } else if (windowWidth >= 320) {
      return 1;
    }
  }

  useEffect(() => {
    setVisibleCards(filtredMovies.slice(0, itemsInRow * initialRows))
  }, [filtredMovies, itemsInRow, initialRows]);

  const onMoreClick = useCallback(() => {
    const itemsToAdd = debouncedWindowWidth >= 1280 ? 3 : 2;

    setVisibleCards(filtredMovies.slice(0, visibleCards.length + itemsToAdd));
  }, [debouncedWindowWidth, filtredMovies, visibleCards]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  return (
    <section className="movies">
      <div className="movies__list">
      {
        visibleCards.map((movie) => <MoviesCard key={movie._id} movie={movie} isSaved={false} canDeleteMovie={canDeleteMovie}/>)
      }
      </div>
      <div className="movies__button">
        { visibleCards.length < filtredMovies.length ? <Button text="Ещё" className="movies__more-button" onClick={onMoreClick}/> : null }
      </div>
    </section>
  );
}

export default MoviesCardList;

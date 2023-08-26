import { useState } from "react";
import Button from "../Button/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import { useCallback } from "react";
import { useEffect, useRef } from "react";
import { useForm } from "../../hooks/useForm.js";

function SearchForm({ onSearch, storageKey }) {
  const [search, setSearch] = useState(
    window.localStorage.getItem(`${storageKey}_search`)
  );
  const [shortFilmCheck, setShortFilmCheck] = useState(
    JSON.parse(window.localStorage.getItem(`${storageKey}_shortFilmSearch`))
  );
  const { isInvalid, handleChange, validate } = useForm({});

  const input = useRef(null);

  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
    handleChange(e);
    window.localStorage.setItem(`${storageKey}_search`, e.target.value);
  }, []);

  const handleSearchShortFilmChange = useCallback(
    (shortFilmCheck) => {
      setShortFilmCheck(shortFilmCheck);
      window.localStorage.setItem(
        `${storageKey}_shortFilmSearch`,
        shortFilmCheck
      );
      onSearch(search, shortFilmCheck);
    },
    [search]
  );

  const handleSearch = useCallback((event) => {
    event.preventDefault();

    validate([input.current]);

    if (!isInvalid()) {
      onSearch(search, shortFilmCheck);
    }
  }, [search, shortFilmCheck, isInvalid, validate, onSearch]);

  useEffect(() => {
    if (search) {
      onSearch(search, shortFilmCheck);
    }
  }, []);

  return (
    <section className="search-form">
      <form className="search-form__content" onSubmit={(ev) => handleSearch(ev)}>
        <input
          ref={input}
          className="search-form__input"
          placeholder="Фильм"
          type="text"
          name="searchInput"
          onChange={(e) => handleSearchChange(e)}
          value={search}
          required
        ></input>
        <Button
          className="search-form__button"
          disabled={isInvalid()}
          type='submit'
        />
        {isInvalid() ? (
          <span className="search-form__error">
            Нужно ввести ключевое слово
          </span>
        ) : null}
      </form>
      <FilterCheckbox
        value={shortFilmCheck}
        onChange={(shortFilmCheck) =>
          handleSearchShortFilmChange(shortFilmCheck)
        }
      />
    </section>
  );
}

export default SearchForm;

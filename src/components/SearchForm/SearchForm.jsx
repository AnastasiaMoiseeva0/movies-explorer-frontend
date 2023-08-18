import { useState } from "react";
import Button from "../Button/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [search, setSearch] = useState('');
  const [shortFilmCheck, setShortFilmCheck] = useState('');

  return (
    <section className="search-form">
      <form className="search-form__content">
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="text"
          name="searchInput"
          onChange={(e) => setSearch(e.target.value)}
          required
        ></input>
        <Button className="search-form__button" onClick={() => onSearch(search, shortFilmCheck)}/>
      </form>
      <FilterCheckbox onChange={(shortFilmCheck) => {
        setShortFilmCheck(shortFilmCheck);
        onSearch(search, shortFilmCheck);
      }}/>
    </section>
  );
}

export default SearchForm;

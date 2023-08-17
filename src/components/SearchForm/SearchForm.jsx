import { useState } from "react";
import Button from "../Button/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ onSearch}) {
  const [value, setValue] = useState('');

  return (
    <section className="search-form">
      <form className="search-form__content">
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="text"
          name="searchInput"
          onChange={(e) => setValue(e.target.value)}
          required
        ></input>
        <Button className="search-form__button" onClick={() => onSearch(value)}/>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;

import Button from "../Button/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__content">
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="text"
          name="searchInput"
        ></input>
        <Button className="search-form__button" />
      </div>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;

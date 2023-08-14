import Button from "../Button/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__content">
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="text"
          name="searchInput"
          required
        ></input>
        <Button className="search-form__button" />
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;

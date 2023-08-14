import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <section className="checkbox">
      <div className="checkbox__toggle">
        <input className="checkbox__button" type="checkbox" name="checkbox" checked />
        <div className="checkbox__toggle_active"></div>
      </div>
      <p className="checkbox__filter">Короткометражки</p>
    </section>
  );
}

export default FilterCheckbox;

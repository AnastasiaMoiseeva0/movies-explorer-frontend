import "./FilterCheckbox.css";

function FilterCheckbox({ onChange }) {
  return (
    <section className="checkbox">
      <label className="checkbox__toggle">
        <input className="checkbox__button" type="checkbox" name="checkbox" onChange={(e) => onChange(e.target.checked)} />
        <div className="checkbox__toggle-active"></div>
      </label>
      <p className="checkbox__filter">Короткометражки</p>
    </section>
  );
}

export default FilterCheckbox;

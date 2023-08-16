import "./Promo.css"
import NavTab from "../NavTab/NavTab";

function Promo({ onProjectClick, onTechsClick, onAboutStudentClick }) {
  return (
    <div className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <NavTab onProjectClick={onProjectClick} onTechsClick={onTechsClick} onAboutStudentClick={onAboutStudentClick} />
    </div>
  );
}

export default Promo;

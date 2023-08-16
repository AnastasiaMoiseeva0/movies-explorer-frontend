import "./NavTab.css";
import Button from "../Button/Button";

function NavTab({onProjectClick, onTechsClick, onAboutStudentClick}) {
  return (
    <nav className="navigation">
      <Button 
        onClick={onProjectClick}
        colorButton="grey"
        className="navigation__button"
        text="О проекте"
      />
      <Button
        onClick={onTechsClick}
        colorButton="grey"
        className="navigation__button"
        text="Технологии"
      />
      <Button
        onClick={onAboutStudentClick}
        colorButton="grey"
        className="navigation__button"
        text="Студент"
      />
    </nav>
  );
}

export default NavTab;

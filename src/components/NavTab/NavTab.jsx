import "./NavTab.css";
import Button from "../Button/Button";

function NavTab() {
  return (
    <nav className="navigation">
      <Button 
        className="navigation__button"
        text="О проекте"
      />
      <Button
        className="navigation__button"
        text="Технологии"
      />
      <Button
        className="navigation__button"
        text="Студент"
      />
    </nav>
  );
}

export default NavTab;

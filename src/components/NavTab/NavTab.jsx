import "./NavTab.css";
import Button from "../Button/Button";

function NavTab() {
  return (
    <nav className="navigation">
      <Button 
        className="navigation__button"
        text="О проекте"
        textColor="white"
        buttonColor="black"
        buttonBorder="s"
      />
      <Button
        className="navigation__button"
        text="Технологии"
        textColor="white"
        buttonColor="black"
        buttonBorder="s"
      />
      <Button
        className="navigation__button"
        text="Студент"
        textColor="white"
        buttonColor="black"
        buttonBorder="s"
      />
    </nav>
  );
}

export default NavTab;

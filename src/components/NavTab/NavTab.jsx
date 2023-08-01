import "./NavTab.css";
import Button from "../Button/Button";

function NavTab() {
  return (
    <nav class="navigation">
      <Button 
        text="О проекте"
        textColor="white"
        buttonColor="black"
      />
      <Button
        text="Технологии"
        textColor="white"
        buttonColor="black"
      />
      <Button
        text="Студент"
        textColor="white"
        buttonColor="black"
      />
    </nav>
  );
}

export default NavTab;

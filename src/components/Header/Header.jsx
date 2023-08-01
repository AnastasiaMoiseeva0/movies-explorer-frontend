import projectLogo from "../../images/logo.svg";
import './Header.css'

function Header({children}) {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={projectLogo}
        alt="Логотип учебного проекта"
      />
      {children}
    </header>
  );
}

export default Header;
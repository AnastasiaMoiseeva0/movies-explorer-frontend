import projectLogo from "../../images/logo.svg";
import Button from "../Button/Button";
import "./Header.css";

function Header({ isAuthorization }) {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={projectLogo}
        alt="Логотип учебного проекта"
      />
      {isAuthorization ? (
        <div className="header__account-links">
        <a
          href="https://github.com/AnastasiaMoiseeva0"
          className="header__account-link"
        >
          Фильмы
        </a>
        <a
          href="https://github.com/AnastasiaMoiseeva0"
          className="header__account-link"
        >
          Сохраненные фильмы
        </a>
      </div>
      ) : null}
      {isAuthorization ? (
        <div className="header__account-navigation">
          <Button className="header__menu" />
          <Button
            className="header__account"
            text="Аккаунт"
          />
        </div>
      ) : (
        <div className="header__navigation">
          <a
            href="https://github.com/AnastasiaMoiseeva0"
            className="header__link"
          >
            Регистрация
          </a>
          <Button
            className="header__login"
            text="Войти"
          />
        </div>
      )}
    </header>
  );
}

export default Header;

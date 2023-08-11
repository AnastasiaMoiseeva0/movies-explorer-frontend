import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Button from "../Button/Button";
import Navigation from "../Navigation/Navigation";
import "./Header.css";
import Logo from "../Logo/Logo";

function Header({ isAuthorization }) {
  const [isNavigationOpen, setNavigationOpen] = useState(false);

  function handleNavigationClick() {
    setNavigationOpen(true);
  }

  function closeNavigate() {
    setNavigationOpen(false);
  }

  return (
    <header className="header">
      <Logo />
      {isAuthorization ? (
        <div className="header__account-links">
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `header__account-link ${
                isActive ? "header__account-link_active" : ""
              }`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `header__account-link ${
                isActive ? "header__account-link_active" : ""
              }`
            }
          >
            Сохраненные фильмы
          </NavLink>
        </div>
      ) : null}
      {isAuthorization ? (
        <div className="header__account-navigation">
          <Button
            className="header__menu"
            onClick={() => handleNavigationClick()}
          />
          <Link to="/profile">
          <Button
              className="header__account"
              colorButton="grey"
              text="Аккаунт"
          />
          </Link>
          <Navigation isOpen={isNavigationOpen} onClose={closeNavigate} />
        </div>
      ) : (
        <div className="header__navigation">
          <Link to="/profile" className="header__link">
            Регистрация
          </Link>
          <Link to="/signin">
            <Button
              className="header__login"
              colorButton="green"
              text="Войти"
            />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;

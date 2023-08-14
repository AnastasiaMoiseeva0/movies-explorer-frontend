import "./Navigation.css";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

function Navigation({ isOpen, onClose }) {
  return (
    <div className={`menu ${isOpen ? "menu_opened" : ""}`} onClick={onClose}>
      <div className="menu__content">
        <Button className="menu__close" iconButton={true}/>
        <nav className="menu__list">
            <NavLink to="/" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Главная</NavLink>
            <NavLink to="/movies" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Сохраненные фильмы</NavLink>
        </nav>
      </div>
      <Button className="menu__account" text="Аккаунт" />
    </div>
  );
}

export default Navigation;

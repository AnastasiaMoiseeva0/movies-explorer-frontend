import "./Register.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import Input from "../Input/Input";

function Register({ isValidate }) {
  return (
      <main className="register">
        <form className="register__form">
          <Logo className="register__logo" />
          <h2 className="register__title">Добро пожаловать!</h2>
          <Input
            text="Имя"
            type="text"
            name="name"
            maxlength="30"
            minlength="2"
            isValidate={false}
          />
          <Input
            text="E-mail"
            type="email"
            name="email"
            isValidate={false}
          />
          <Input
            text="Пароль"
            type="password"
            name="password"
            errorName="Что-то пошло не так..."
            isValidate={true}
          />
          <Button
            className="register__button register__button_type_signup"
            colorButton="blue"
            text="Зарегистрироваться"
          />
          <div className="register__signin">
            <p className="register__signin-title">Уже зарегистрированы?</p>
            <Link to="/signin" className="register__login-link">
              Войти
            </Link>
          </div>
        </form>
      </main>
  );
}

export default Register;

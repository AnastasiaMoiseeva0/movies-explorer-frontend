import "./Register.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import Input from "../Input/Input";

function Register({ isValidate }) {
  return (
    <>
      <section className="register">
        <form className="register__form">
          <Logo className="register__logo" />
          <h2 className="register__title">Добро пожаловать!</h2>
          <Input
            text="Имя"
            type="text"
            isRequired={true}
            name="name"
            isValidate={false}
          />
          <Input
            text="E-mail"
            type="email"
            isRequired={true}
            name="email"
            isValidate={false}
          />
          <Input
            text="Пароль"
            type="password"
            isRequired={true}
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
      </section>
    </>
  );
}

export default Register;

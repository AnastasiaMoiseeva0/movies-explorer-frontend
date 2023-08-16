import "./Login.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import Input from "../Input/Input";

function Login() {
  return (
    <main className="register">
      <form className="register__form">
        <Logo className="register__logo" />
        <h2 className="register__title">Рады видеть!</h2>
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
          isValidate={false}
        />
        <Button
          className="register__button register__button_type_signin"
          text="Войти"
          colorButton="blue"
        />
        <div className="register__signin">
          <p className="register__signin-title">Еще не зарегистрированы?</p>
          <Link to="/signup" className="register__login-link">
            Регистрация
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Login;

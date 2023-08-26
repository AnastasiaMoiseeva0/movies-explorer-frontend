import "./Login.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import { useForm } from "../../hooks/useForm.js";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useState } from "react";

function Login({ handleLogin }) {
  const { values, handleChange, setValues, invalidState, isInvalid } = useForm(
    {}
  );
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  function onLogin(event) {
    event.preventDefault();
    if (!values.email || !values.password) {
      return;
    }

    handleLogin(values.password, values.email)
      .then(() => {
        setValues({ password: "", email: "" });
        navigate("/movies", { replace: true });
      })
      .catch((error) => {
        setErrorMessage('При аутентификации произошла ошибка');
      });
  }

  return (
    <main className="register">
      <form className="register__form" onSubmit={onLogin}>
        <Logo className="register__logo" />
        <h2 className="register__title">Рады видеть!</h2>
        <Input
          text="E-mail"
          type="email"
          name="email"
          isValidate={false}
          pattern="[A-Za-zА-Яа-яЁё\s\-]"
          value={values.email || ""}
          validationMessage={invalidState.email}
          onChange={handleChange}
        />
        <Input
          text="Пароль"
          type="password"
          name="password"
          isValidate={false}
          value={values.password || ""}
          validationMessage={invalidState.password}
          onChange={handleChange}
        />
        <div className="register__footer">
          <ErrorMessage
            message={errorMessage}
            className="register__error"
          ></ErrorMessage>
          <Button
            className={`register__button ${
              isInvalid(invalidState) ? "register__button_disabled" : ""
            }`}
            text="Войти"
            colorButton="blue"
            type={"submit"}
          />
        </div>
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

import "./Register.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import * as auth from "../../utils/auth";
import { useForm } from "../../hooks/useForm.js";
import { useState } from "react";
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx'

function Register({ handleLogin }) {
  const { values, handleChange, invalidState, isInvalid } = useForm({});
  const [ errorMessage, setErrorMessage ] = useState(null);
  const navigate = useNavigate();

  function onRegister(event) {
    event.preventDefault();
    if ((values.name, values.email, values.password)) {
      auth
        .register(values.name, values.email, values.password)
        .then(() => {
          return handleLogin(values.password, values.email);
        })
        .then(() => {
          navigate('/movies', { replace: true });
        })
        .catch(() => {
          setErrorMessage('При регистрации произошла ошибка')
        });
    }
  }

  return (
      <main className="register">
        <form className="register__form" onSubmit={onRegister}>
          <Logo className="register__logo" />
          <h2 className="register__title">Добро пожаловать!</h2>
          <Input
            text="Имя"
            type="text"
            name="name"
            maxLength="30"
            minLength="2"
            pattern="[A-Za-zА-Яа-яЁё\s\-]+"
            validationMessage={invalidState.name}
            onChange={handleChange}
            value={values.name || ''}
          />
          <Input
            text="E-mail"
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            validationMessage={invalidState.email}
            onChange={handleChange}
            value={values.email || ''}
          />
          <Input
            text="Пароль"
            type="password"
            name="password"
            validationMessage={invalidState.password}
            onChange={handleChange}
            value={values.password || ''}
          />
          <div className="register__footer">
            <ErrorMessage message={errorMessage} className='register__error' />
            <Button
              className={`register__button ${
                isInvalid(invalidState) ? "register__button_disabled" : ""
              }`}
              colorButton="blue"
              text="Зарегистрироваться"
              type={'submit'}
            />
          </div>
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

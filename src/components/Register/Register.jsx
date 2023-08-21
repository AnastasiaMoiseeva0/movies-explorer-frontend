import "./Register.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import * as auth from "../../utils/auth";
import { useForm } from "../../hooks/useForm.js";

function Register() {
  const { values, handleChange } = useForm({});
  const navigate = useNavigate();

  function onRegister(event) {
    event.preventDefault();
    if ((values.name, values.email, values.password)) {
      auth
        .register(values.name, values.email, values.password)
        .then(() => {
          navigate('/signin');
        })
        .catch((err) => {
          console.log(err);
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
            isValidate={false}
            onChange={handleChange}
            value={values.name || ''}
          />
          <Input
            text="E-mail"
            type="email"
            name="email"
            isValidate={false}
            onChange={handleChange}
            value={values.email || ''}
          />
          <Input
            text="Пароль"
            type="password"
            name="password"
            errorName="Что-то пошло не так..."
            isValidate={true}
            onChange={handleChange}
            value={values.password || ''}
          />
          <Button
            className="register__button register__button_type_signup"
            colorButton="blue"
            text="Зарегистрироваться"
            type={'submit'}
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

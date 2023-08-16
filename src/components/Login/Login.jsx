import "./Login.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import * as auth from "../../utils/auth";
import { useForm } from "../../hooks/useForm.js";

function Login({handleLogin}) {
 const {values, handleChange, setValues} = useForm({});
 const navigate = useNavigate();

 function onLogin(event) {
  event.preventDefault();
  if (!values.email || !values.password) {
    return;
  }
  auth
    .authorize(values.password, values.email)
    .then((data) => {
      if (data.token) {
        setValues({ password: "", email: "" });
        handleLogin();
        navigate("/movies", { replace: true });
      }
    })
    .catch((err) => console.log(err));
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
          value={values.email || ''}
          onChange={handleChange}
        />
        <Input
          text="Пароль"
          type="password"
          name="password"
          isValidate={false}
          value={values.password || ''}
          onChange={handleChange}
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

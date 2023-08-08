import "./Login.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

function Login({ isValidate }) {
  return (
    <>
      <section className="register">
        <form className="register__form">
          <Logo className="register__logo" />
          <h2 className="register__title">Рады видеть!</h2>
          <p className="register__subtitle">E-mail</p>
          <input
            className={`register__field ${
              isValidate ? "register__field_type_red" : ""
            }`}
            type="email"
            required
            name="email"
          />
          <span class="register-error"></span>
          <p className="register__subtitle">Пароль</p>
          <input
            className={`register__field ${
              isValidate ? "register__field_type_red" : ""
            }`}
            type="password"
            required
            name="password"
          />
          <span class="register-error"></span>
          <Button className="register__button register__button_type_signin" text="Войти" />
          <div className="register__signin">
            <p className="register__signin-title">Еще не зарегистрированы</p>
            <a href="/sign-up" className="register__login-link">
              Регистрация
            </a>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
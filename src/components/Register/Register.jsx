import "./Register.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

function Register({ isValidate }) {
  return (
    <>
      <section className="register">
        <form className="register__form">
          <Logo className="register__logo" />
          <h2 className="register__title">Добро пожаловать!</h2>
          <p className="register__subtitle">Имя</p>
          <input
            className={`register__field ${
              isValidate ? "register__field_type_red" : ""
            }`}
            type="text"
            required
            name="name"
          />
          <span class="register-error"></span>
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
          <Button className="register__button" text="Зарегистрироваться" />
          <div className="register__signin">
            <p className="register__signin-title">Уже зарегистрированы?</p>
            <a href="/sign-in" className="register__login-link">
              Войти
            </a>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;

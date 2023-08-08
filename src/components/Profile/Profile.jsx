import "./Profile.css";
import Header from "../Header/Header";
import Button from "../Button/Button";

function Profile() {
  return (
    <section className="profile">
      <Header isAuthorization={true} />
      <form className="profile__form">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <div>
          <div className="profile__input">
            <p className="profile__subtitle">Имя</p>
            <input
              className="profile__field"
              type="text"
              required
              name="name"
              value="Виталий"
              disabled
            />
          </div>
          <div className="profile__input">
            <p className="profile__subtitle">E-mail</p>
            <input
              className="profile__field"
              type="email"
              required
              name="email"
              value="pochta@yandex.ru"
              disabled
            />
          </div>
        </div>
        <div className="profile__list">
          <Button className="profile__edit-button" text="Редактировать" />
          <Button className="profile__exit-button" text="Выйти из аккаунта" />
        </div>
      </form>
    </section>
  );
}

export default Profile;

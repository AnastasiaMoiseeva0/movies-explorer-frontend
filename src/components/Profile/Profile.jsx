import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";
import Button from "../Button/Button";

function Profile({isEditProfile, isDisabled}) {
  return (
    <>
    <Header isAuthorization={true} />
    <main className="profile">
      <form className="profile__form">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <div>
          <div className="profile__input">
            <p className="profile__subtitle">Имя</p>
            <input
              className="profile__field"
              type="text"
              maxlength="30"
              minlength="2"
              required
              name="name"
              value="Виталий"
              disabled={!isEditProfile}
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
              disabled={!isEditProfile}
            />
          </div>
        </div>
        <div>
          {isEditProfile ? (
            <div className="profile__list">
              <span className="profile-error"></span>
              <Button className={`profile__save-button ${isDisabled ? "profile__save-button_disabled" : ""}`} text="Сохранить" colorButton="blue"/>
            </div>
          ) : (
            <div className="profile__list">
              <Button className="profile__edit-button" text="Редактировать" />
              <Link to="/">
                <Button
                  className="profile__exit-button"
                  text="Выйти из аккаунта"
                />
              </Link>
            </div>
          )}
        </div>
      </form>
    </main>
    </>
  );
}

export default Profile;

import { useContext } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({isEditProfile, isDisabled, onSignOut}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
    <Header isAuthorization={true} />
    <main className="profile">
      <form className="profile__form">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
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
              value={currentUser.name}
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
              value={currentUser.email}
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
              <Button className="profile__exit-button" onClick={onSignOut} text="Выйти из аккаунта" />
            </div>
          )}
        </div>
      </form>
    </main>
    </>
  );
}

export default Profile;

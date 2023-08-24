import { useContext, useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm.js";

function Profile({ onSignOut, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [isEditProfile, setEditProfile] = useState(false);
  const { handleChange, values, invalidState, isInvalid } = useForm({
    name: currentUser.name,
    email: currentUser.email,
  });

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: values.name,
      email: values.email,
    });
  }

  function handleEditProfile() {
    setEditProfile(true);
  }

  return (
    <>
      <Header isAuthorization={true} />
      <main className="profile">
        <form className="profile__form" onSubmit={handleSubmit}>
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <div>
            <div className="profile__input">
              <p className="profile__subtitle">Имя</p>
              <div className="profile__input-form">
                <input
                  className="profile__field"
                  type="text"
                  maxlength="30"
                  minlength="2"
                  required
                  name="name"
                  value={values.name}
                  disabled={!isEditProfile}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="profile__input">
              <p className="profile__subtitle">E-mail</p>
              <div className="profile__input-form">
                <input
                  className="profile__field"
                  type="email"
                  required
                  name="email"
                  value={values.email}
                  disabled={!isEditProfile}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div>
            {isEditProfile ? (
              <div className="profile__list">
                { isInvalid(invalidState) ? (<span className="profile__error">При обновлении профиля произошла ошибка.</span>): null}
                <Button
                  className={`profile__save-button ${
                    isInvalid(invalidState) ? "profile__save-button_disabled" : ""
                  }`}
                  text="Сохранить"
                  colorButton="blue"
                  type="submit"
                />
              </div>
            ) : (
              <div className="profile__list">
                <Button
                  className="profile__edit-button"
                  text="Редактировать"
                  onClick={handleEditProfile}
                />
                <Button
                  className="profile__exit-button"
                  onClick={onSignOut}
                  text="Выйти из аккаунта"
                />
              </div>
            )}
          </div>
        </form>
      </main>
    </>
  );
}

export default Profile;

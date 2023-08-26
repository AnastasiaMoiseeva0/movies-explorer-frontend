import { useCallback, useContext, useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm.js";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function Profile({ onSignOut, onUpdateUser, isError }) {
  const currentUser = useContext(CurrentUserContext);
  const [isEditProfile, setEditProfile] = useState(false);
  const { handleChange, values, invalidState, isInvalid } = useForm({
    name: currentUser.name,
    email: currentUser.email,
  });
  const [ errorMessage, setErrorMessage ] = useState(null);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if(isInvalid(invalidState)) {
      return;
    }

    setErrorMessage(null);

    onUpdateUser({
      name: values.name,
      email: values.email,
    }).catch(() => {
      setErrorMessage('При обновлении профиля произошла ошибка');
    });
  }, [invalidState, isInvalid, onUpdateUser, values])

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
                  className={`profile__field ${
                    invalidState.name ? "profile__field_type_red" : ""
                  }`}
                  type="text"
                  maxLength="30"
                  minLength="2"
                  required
                  name="name"
                  pattern="[A-Za-zА-Яа-яЁё\s\-]+"
                  value={values.name}
                  disabled={!isEditProfile}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                {invalidState.name ? <ErrorMessage message={invalidState.name} className='profile__error-input'></ErrorMessage> : null }
              </div>
            </div>
            <div className="profile__input">
              <p className="profile__subtitle">E-mail</p>
              <div className="profile__input-form">
                <input
                  className={`profile__field ${
                    invalidState.email ? "profile__field_type_red" : ""
                  }`}
                  type="email"
                  required
                  name="email"
                  value={values.email}
                  validationMessage={invalidState.email}
                  disabled={!isEditProfile}
                  onChange={handleChange}
                />
                {invalidState.email ? <ErrorMessage message={invalidState.email} className='profile__error-input'></ErrorMessage> : null }
              </div>
            </div>
          </div>
          <div>
            {isEditProfile ? (
              <div className="profile__list">
                {errorMessage ? (
                  <ErrorMessage message={errorMessage} className='profile__error' />
                ) : null}
                <Button
                  className={`profile__save-button ${
                    isInvalid(invalidState)
                      ? "profile__save-button_disabled"
                      : ""
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

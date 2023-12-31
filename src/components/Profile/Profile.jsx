import { useCallback, useContext, useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm.js";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SuccessfulMessage from "../SuccessfulMessage/SuccessfulMessage";

function Profile({ onSignOut, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [isEditProfile, setEditProfile] = useState(false);
  const [ isLoading, setIsLoading] = useState(false);
  const { handleChange, values, invalidState, isInvalid } = useForm({
    name: currentUser.name,
    email: currentUser.email,
  });
  const [ errorMessage, setErrorMessage ] = useState(null);
  const [ successfulMessage, setSuccessfulMessage ] = useState(null);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if(isInvalid(invalidState)) {
      return;
    }
    setErrorMessage(null);
    setSuccessfulMessage(null);
    setIsLoading(true);
    onUpdateUser({
      name: values.name,
      email: values.email,
    }).then(() => {
      setSuccessfulMessage('Профиль успешно обновлен!');
    })
    .catch(() => {
      setErrorMessage('При обновлении профиля произошла ошибка');
    })
    .finally(() => {
      setIsLoading(false);
    });;
  }, [invalidState, isInvalid, onUpdateUser, values]);

  const isSubmitDisabled = useCallback(() => {
    return isInvalid(invalidState) || isLoading || (values.name === currentUser.name && values.email === currentUser.email)
  }, [isInvalid, invalidState, isLoading, values, currentUser]);

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
                  pattern="[a-zA-Z0-9\._%\+\-]+@[a-zA-Z0-9\.\-]+[\.][a-zA-Z]{2,}$"
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
                  <ErrorMessage message={errorMessage} className='profile__message' />
                ) : null}
                {successfulMessage ? (
                  <SuccessfulMessage message={successfulMessage} className='profile__message' />
                ) : null}
                <Button
                  className={`profile__save-button ${
                    isSubmitDisabled()
                      ? "profile__save-button_disabled"
                      : ""
                  }`}
                  text="Сохранить"
                  colorButton="blue"
                  type="submit"
                  disabled={isSubmitDisabled()}
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

import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { AppContext } from "../../contexts/AppContext";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import * as auth from "../../utils/auth";
import mainApi from "../../utils/mainApi";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [savedMovies, setSavedMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      auth
        .getCurrentUser()
        .then((res) => {
          if (res) {
            const userData = {
              name: res.data.name,
              email: res.data.email,
            };
            setCurrentUser(userData);
            setLoggedIn(true);
            loadSavedFilms();
            navigate("/movies", { replace: true });
          }
        })
        .catch(() => {
          setLoggedIn(false);
        });
    }
  }, [loggedIn]);

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleSaveMovie(movie) {
    mainApi
      .saveMovies(movie)
      .then(() => {
        loadSavedFilms();
      })
      .catch((err) => err);
  }

  function onSignOut() {
    localStorage.removeItem("jwt");
    navigate("/");
    setLoggedIn(false);
  }
  
  function loadSavedFilms() {
    mainApi
      .getSaveMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((error) => {
        console.log(error);
    });
  }

  function handleDeleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        loadSavedFilms();
      })
      .catch((err) => err);
  }

  return (
    <AppContext.Provider>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                element={
                  <Movies
                    loggedIn={loggedIn}
                    savedMovies={savedMovies}
                    handleSaveMovie={handleSaveMovie}
                  />
                }
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                element={
                  <Profile
                    isDisabled={false}
                    onSignOut={onSignOut}
                  />
                }
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn} element={<SavedMovies savedMovies={savedMovies} 
              handleDeleteMovie={handleDeleteMovie}
              />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CurrentUserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;

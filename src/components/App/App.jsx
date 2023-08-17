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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      auth
        .getCurrentUser()
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate("/movies", { replace: true });
          }
        })
        .catch(() => {
          setLoggedIn(false);
        });
    }
  }, [loggedIn, navigate]);

  function handleLogin() {
    setLoggedIn(true);
  }

  return (
    <AppContext.Provider value={isLoading}>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login handleLogin={handleLogin}/>} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute loggedIn={loggedIn} element={<Movies loggedIn={loggedIn} />} />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                element={<Profile isEditProfile={false} isDisabled={false} />}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn} element={<SavedMovies />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CurrentUserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;

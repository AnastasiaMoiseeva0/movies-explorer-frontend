import React from "react";
import { useState, useEffect, Navigate, useNavigate } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
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
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      auth
        .getCurrentUser()
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate("/movies", { replace: true });
          } else {
            navigate("/signin", { replace: true });
          }
        })
        .catch(() => {
          setLoggedIn(false);
        });
    }
  }, [loggedIn, navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          loggedIn ? (
            <Navigate to="/movie" replace />
          ) : (
            <Navigate to="/signin" replace />
          )
        }
      />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route
        path="/profile"
        element={<Profile isEditProfile={false} isDisabled={false} />}
      />
      <Route path="/" element={<Main />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/saved-movies" element={<SavedMovies />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

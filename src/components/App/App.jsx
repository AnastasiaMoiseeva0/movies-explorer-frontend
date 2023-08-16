import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {
  return (
        <Routes>
          <Route path="/signup" element={<Register/>} />
          <Route path="/signin" element={<Login/>} />
          <Route path="/profile" element={<Profile isEditProfile={false} isDisabled={false} />} />
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
  );
}

export default App;

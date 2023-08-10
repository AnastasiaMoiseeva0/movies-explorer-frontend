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
import Navigation from "../Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route path="/signup" element={<Register isValidate={false}/>} />
          <Route path="/signin" element={<Login isValidate={false} />} />
          <Route path="/profile" element={<Profile isValidate={false} />} />
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Navigation />
      </div>
    </div>
  );
}

export default App;

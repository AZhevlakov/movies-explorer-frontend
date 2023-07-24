import React from "react";
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Main from "./Main/Main";
import Movies from "./Movies/Movies";
import SavedMovies from "./SavedMovies/SavedMovies";
import Profile from "./Profile/Profile";
import Login from "./Login/Login";
import Register from "./Register/Register";
import PageNotFound from "./PageNotFound/PageNotFound";

const Routing = () => {
  return (
    <Routes>
      <Route path="/movies" element={<ProtectedRoute element={Movies} />} />
      <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} />} />
      <Route path="/profile" element={<ProtectedRoute element={Profile} />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routing;

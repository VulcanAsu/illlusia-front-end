import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

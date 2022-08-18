// import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "containers/Login/Login";
import SignIn from "containers/SignIn/SignIn";
import ForgotPassword from "containers/ForgotPassword/ForgotPassword";
import NewPassword from "containers/NewPassword/NewPassword";
import ForgotUsername from "containers/ForgotUsername/ForgotUsername";

export default function UnathenticatedRoute() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/new-password" element={<NewPassword />} />
      <Route path="/forgot-username" element={<ForgotUsername />} />
    </Routes>
  );
}

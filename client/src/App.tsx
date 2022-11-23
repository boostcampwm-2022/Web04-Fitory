import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "@styles/GlobalStyle";
import { RoutePath } from "@constants/enums";
import HomePage from "@pages/HomePage";
import ProfilePage from "@pages/ProfilePage";
import LoginPage from "@pages/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path={RoutePath.HOME} element={<HomePage />} />
        <Route path={RoutePath.PROFILE} element={<ProfilePage />} />
        <Route path={RoutePath.LOGIN} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GlobalStyle from "@styles/GlobalStyle";
import { RoutePath } from "@constants/enums";
import HomePage from "@pages/HomePage";
import ProfilePage from "@pages/ProfilePage";
import LoginPage from "@pages/LoginPage";
import JoinPage from "@pages/JoinPage";
import SearchPage from "@pages/SearchPage";

const googleClientId = process.env.GOOGLE_CLIENT_ID as string;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <GoogleOAuthProvider clientId={googleClientId}>
        <Routes>
          <Route path={RoutePath.HOME} element={<HomePage />} />
          <Route path={RoutePath.PROFILE} element={<ProfilePage />} />
          <Route path={RoutePath.LOGIN} element={<LoginPage />} />
          <Route path={RoutePath.SEARCH} element={<SearchPage />} />
          <Route path={RoutePath.JOIN} element={<JoinPage />} />
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
};

export default App;

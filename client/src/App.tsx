import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { RoutePath } from "@constants/enums";
import GlobalStyle from "@styles/GlobalStyle";

import HomePage from "@pages/HomePage";
import ProfilePage from "@pages/ProfilePage";
import LoginPage from "@pages/LoginPage";
import JoinPage from "@pages/JoinPage";
import SearchPage from "@pages/SearchPage";
import NotificationPage from "@pages/NotificationPage";

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
          <Route path={RoutePath.NOTIFICATION} element={<NotificationPage />} />
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
};

export default App;

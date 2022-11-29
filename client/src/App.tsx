import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GlobalStyle from "@styles/GlobalStyle";
import { RoutePath } from "@constants/enums";

import HomePage from "@pages/HomePage";
import ChallengePage from "@pages/ChallengePage";
import RecordPage from "@pages/RecordPage";
import ProfilePage from "@pages/ProfilePage";
import LoginPage from "@pages/LoginPage";
import JoinPage from "@pages/JoinPage";
import SearchPage from "@pages/SearchPage";

const queryClient = new QueryClient();
const googleClientId = process.env.GOOGLE_CLIENT_ID as string;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={googleClientId}>
          <Routes>
            {/* Home */}
            <Route path={RoutePath.HOME} element={<HomePage />} />
            <Route path={RoutePath.CHALLENGE} element={<ChallengePage />} />
            <Route path={RoutePath.RECORD} element={<RecordPage />} />
            {/* Search */}
            <Route path={RoutePath.SEARCH} element={<SearchPage />} />
            {/* Profile */}
            <Route path={RoutePath.PROFILE} element={<ProfilePage />} />
            <Route path={RoutePath.LOGIN} element={<LoginPage />} />
            <Route path={RoutePath.JOIN} element={<JoinPage />} />
            <Route path={RoutePath.SEARCH} element={<SearchPage />} />
          </Routes>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;

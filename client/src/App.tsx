import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobalStyle from "@styles/GlobalStyle";
import { RoutePath } from "@constants/enums";

import HomePage from "@pages/HomePage";
import ChallengePage from "@pages/ChallengePage";
import RecordPage from "@pages/RecordPage";
import ProfilePage from "@pages/ProfilePage";
import LoginPage from "@pages/LoginPage";
import JoinPage from "@pages/JoinPage";
import SearchPage from "@pages/SearchPage";
import StaticsPage from "@pages/StaticsPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>loading..</div>}>
          <Routes>
            {/* Home */}
            <Route path={RoutePath.HOME} element={<HomePage />} />
            <Route path={RoutePath.CHALLENGE} element={<ChallengePage />} />
            <Route path={RoutePath.RECORD} element={<RecordPage />} />
            {/* Search */}
            <Route path={RoutePath.SEARCH} element={<SearchPage />} />
            {/* Statics */}
            <Route path={RoutePath.STATICS} element={<StaticsPage />} />
            {/* Profile */}
            <Route path={RoutePath.PROFILE} element={<ProfilePage />} />
            <Route path={RoutePath.LOGIN} element={<LoginPage />} />
            <Route path={RoutePath.JOIN} element={<JoinPage />} />
            <Route path={RoutePath.SEARCH} element={<SearchPage />} />
          </Routes>
        </Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;

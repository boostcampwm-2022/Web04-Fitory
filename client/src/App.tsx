import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobalStyle from "@styles/GlobalStyle";
import { RoutePath } from "@constants/enums";

const HomePage = lazy(() => import("@pages/HomePage"));
const ChallengePage = lazy(() => import("@pages/ChallengePage"));
const RecordPage = lazy(() => import("@pages/RecordPage"));
const ProfilePage = lazy(() => import("@pages/ProfilePage"));
const FollowPage = lazy(() => import("@pages/FollowPage"));
const LoginPage = lazy(() => import("@pages/LoginPage"));
const JoinPage = lazy(() => import("@pages/JoinPage"));
const StaticsPage = lazy(() => import("@pages/StaticsPage"));
const SearchPage = lazy(() => import("@pages/SearchPage"));

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
            <Route path={RoutePath.FOLLOW} element={<FollowPage />} />
          </Routes>
        </Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;

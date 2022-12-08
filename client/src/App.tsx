import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ErrorBoundary } from "react-error-boundary";

import GlobalStyle from "@styles/GlobalStyle";
import { RoutePath } from "@constants/enums";
import Loading from "@components/Loading";
import ErrorFallback from "@components/ErrorFallback";
import NotFoundPage from "@pages/NotFountPage";

const HomePage = lazy(() => import("@pages/HomePage"));
const ChallengePage = lazy(() => import("@pages/ChallengePage"));
const RecordPage = lazy(() => import("@pages/RecordPage"));
const ProfilePage = lazy(() => import("@pages/ProfilePage"));
const FollowPage = lazy(() => import("@pages/FollowPage"));
const LoginPage = lazy(() => import("@pages/LoginPage"));
const JoinPage = lazy(() => import("@pages/JoinPage"));
const StatisticsPage = lazy(() => import("@pages/StatisticsPage"));
const SearchPage = lazy(() => import("@pages/SearchPage"));
const CalendarPage = lazy(() => import("@pages/CalendarPage"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<Loading isLazy />}>
            <Routes>
              {/* Home */}
              <Route path={RoutePath.HOME} element={<HomePage />} />
              <Route path={RoutePath.CHALLENGE} element={<ChallengePage />} />
              <Route path={RoutePath.RECORD} element={<RecordPage />} />
              <Route path={RoutePath.CALENDAR} element={<CalendarPage />} />
              {/* Search */}
              <Route path={RoutePath.SEARCH} element={<SearchPage />} />
              {/* Statistics */}
              <Route path={RoutePath.STATISTICS} element={<StatisticsPage />} />
              {/* Profile */}
              <Route path={RoutePath.PROFILE}>
                <Route path=":userId" element={<ProfilePage />} />
                <Route path="" element={<ProfilePage />} />
              </Route>
              <Route path={RoutePath.LOGIN} element={<LoginPage />} />
              <Route path={RoutePath.JOIN} element={<JoinPage />} />
              <Route path={RoutePath.SEARCH} element={<SearchPage />} />
              <Route path={RoutePath.FOLLOW}>
                <Route path=":userId" element={<FollowPage />} />
                <Route path="" element={<FollowPage />} />
              </Route>
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;

import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobalStyle from "@styles/GlobalStyle";
import { RoutePath } from "@constants/enums";
import Loading from "@components/Loading";
import NotFoundPage from "@pages/NotFountPage";

const HomePage = lazy(() => import("@pages/HomePage"));
const ChallengePage = lazy(() => import("@pages/ChallengePage"));
const RecordPage = lazy(() => import("@pages/RecordPage"));
const ProfilePage = lazy(() => import("@pages/ProfilePage"));
const FollowPage = lazy(() => import("@pages/FollowPage"));
const LoginPage = lazy(() => import("@pages/LoginPage"));
const JoinPage = lazy(() => import("@pages/JoinPage"));
const StaticsPage = lazy(() => import("@pages/StaticsPage"));
const SearchPage = lazy(() => import("@pages/SearchPage"));
const CalendarPage = lazy(() => import("@pages/CalendarPage"));

const queryClient = new QueryClient();

const App = () => {
  // //! sse 실행 방법
  // const userId = 1;
  // const eventSource = new EventSource(`http://localhost:8080/api/alarms/unread?userId=${userId}`);
  // eventSource.onmessage = ({ data }) => {
  //   console.log(`${userId}'s unread alarm: `, JSON.parse(data).unreadAlarmCount);
  // };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loading isLazy />}>
          <Routes>
            {/* Home */}
            <Route path={RoutePath.HOME} element={<HomePage />} />
            <Route path={RoutePath.CHALLENGE} element={<ChallengePage />} />
            <Route path={RoutePath.RECORD} element={<RecordPage />} />
            <Route path={RoutePath.CALENDAR} element={<CalendarPage />} />
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
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;

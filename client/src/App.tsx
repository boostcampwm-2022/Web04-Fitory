import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "@styles/GlobalStyle";
import { RoutePath } from "@constants/enums";
import HomePage from "@pages/HomePage";
import SearchPage from "@pages/SearchPage";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path={RoutePath.HOME} element={<HomePage />} />
        <Route path={RoutePath.SEARCH} element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

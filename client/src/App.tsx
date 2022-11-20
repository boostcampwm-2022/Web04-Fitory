import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "src/styles/GlobalStyle";

import TopNavigationBar from "@components/TopNavigationBar";
import BottomNavigationBar from "@components/BottomNavigationBar";
import MainContainer from "@components/MainContainer";

import { RoutePath } from "@constants/enums";
import HomePage from "@pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <TopNavigationBar isRoot />
      <MainContainer>
        <Routes>
          <Route path={RoutePath.HOME} element={<HomePage />} />
        </Routes>
      </MainContainer>
      <BottomNavigationBar />
    </BrowserRouter>
  );
};

export default App;

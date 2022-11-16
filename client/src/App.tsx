import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import GlobalStyle from "src/styles/GlobalStyle";
import TopNavigationBar from "@components/TopNavigationBar";
import BottomNavigationBar from "@components/BottomNavigationBar";
import MainContainer from "@components/MainContainer";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <TopNavigationBar isRoot />
      <MainContainer>
        <Routes />
      </MainContainer>
      <BottomNavigationBar />
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "@styles/GlobalStyle";
import { RoutePath } from "@constants/enums";
import HomePage from "@pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path={RoutePath.HOME} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

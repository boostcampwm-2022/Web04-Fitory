import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import GlobalStyle from "src/styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;

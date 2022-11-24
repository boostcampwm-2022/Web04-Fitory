import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "src/styles/Theme";
import App from "src/App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);

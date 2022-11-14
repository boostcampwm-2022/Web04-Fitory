import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);

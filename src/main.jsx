import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import PortfolioState from "./context/context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PortfolioState>
    <App />
    </PortfolioState>
  </React.StrictMode>
);

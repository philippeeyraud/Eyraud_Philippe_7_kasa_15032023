import React from "react";
import reactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

const reactRoot = reactDOM.createRoot(document.getElementById("root"));
reactRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </React.StrictMode>
);

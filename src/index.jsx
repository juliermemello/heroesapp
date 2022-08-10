import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";

import RouterApp from "router";

import "./index.css";

import { FilterProvider } from "context/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <FilterProvider>
      <CssBaseline enableColorScheme />
      <RouterApp />
    </FilterProvider>
  </React.StrictMode>
);


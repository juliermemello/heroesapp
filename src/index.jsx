import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import RouterApp from "router";
import { theme } from "./theme";

import "./index.css";

import { FilterProvider } from "context/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FilterProvider>
        <CssBaseline enableColorScheme />
        <RouterApp />
      </FilterProvider>
    </ThemeProvider>
  </React.StrictMode>
);


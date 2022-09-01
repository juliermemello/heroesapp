import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import RouterApp from "router";
import { theme } from "./theme";

import "./index.css";

import { FilterProvider } from "context/FilterContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <FilterProvider>
          <CssBaseline enableColorScheme />
          <RouterApp />
        </FilterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);


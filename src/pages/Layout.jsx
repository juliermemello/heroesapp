import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import Header from "pages/Header";

function Layout() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;

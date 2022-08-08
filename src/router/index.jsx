import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "pages/Layout";
import ListView from "pages/ListView";
import Detail from "pages/Detail";

function RouterApp() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route path="/" element={<ListView />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;

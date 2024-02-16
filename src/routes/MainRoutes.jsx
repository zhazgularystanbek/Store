import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Admin from "../Pages/Admin/Admin";

const MainRoutes = () => {
  let PUBLIC = [
    { path: "/", element: <Home />, key: 1 },
    { path: "/admin", element: <Admin />, key: 2 },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
    </Routes>
  );
};

export default MainRoutes;

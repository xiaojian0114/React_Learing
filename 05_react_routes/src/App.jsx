import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import AppRoutes from "./routes";

import "./app.css";

const App = () => {
  return (
    <BrowserRouter>
      {/* <nav>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about?name=zhangsan&age=20" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/dashboard" activeClassName="active">
          Dashboard
        </NavLink>
        <NavLink to="/login" activeClassName="active">
          Login
        </NavLink>
        <NavLink to="/book/123" activeClassName="active">
          Book
        </NavLink>
      </nav> */}

      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;

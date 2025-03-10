import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  // 从 localStorage 获取用户信息，检查是否已登录
  const user = JSON.parse(localStorage.getItem("user"));

  // 如果用户没有登录，不显示导航栏
  if (!user) {
    return null;
  }

  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/about?name=zhangsan&age=20"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Login
      </NavLink>
      <NavLink
        to="/book/123"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Book
      </NavLink>
    </nav>
  );
};

export default NavBar;

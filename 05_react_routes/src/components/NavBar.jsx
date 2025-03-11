import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav>
      <div className="nav-left">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
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
          to="/book/123"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Book
        </NavLink>
      </div>
      <div className="nav-right">
        {user ? (
          <>
            <span className="user-info">欢迎：{user.username}</span>
            <button className="logout-button" onClick={handleLogout}>
              退出登录
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

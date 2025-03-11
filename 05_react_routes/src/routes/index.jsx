import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../dashboard/Dashboard";
import Profile from "../dashboard/Profile";
import Setting from "../dashboard/Setting";
import Fans from "../dashboard/Fans";
import Follow from "../dashboard/Follow";
import Book from "../pages/Book";
import NotFound from "../pages/NotFound";
import BlogList from "../components/BlogList";

const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // 登录成功后更新状态
  };

  return (
    <>
      {isLoggedIn && <NavBar />}
      <Routes>
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />
        <Route path="/" element={isLoggedIn ? <BlogList /> : <Login />} />
        <Route path="/about" element={isLoggedIn ? <About /> : <Login />} />
        <Route
          path="/book/:bookId"
          element={isLoggedIn ? <Book /> : <Login />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Login />}
        >
          <Route index element={isLoggedIn ? <Profile /> : <Login />} />
          <Route path="profile" element={isLoggedIn ? <Profile /> : <Login />}>
            <Route path="fans" element={isLoggedIn ? <Fans /> : <Login />} />
            <Route
              path="follow"
              element={isLoggedIn ? <Follow /> : <Login />}
            />
          </Route>
          <Route
            path="setting"
            element={isLoggedIn ? <Setting /> : <Login />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

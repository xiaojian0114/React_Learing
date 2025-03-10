import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Dashboard from "../dashboard/Dashboard";
import Profile from "../dashboard/Profile";
import Setting from "../dashboard/Setting";

import Fans from "../dashboard/Fans";
import Follow from "../dashboard/Follow";

import Login from "../pages/Login";

import Book from "../pages/Book";

import NavBar from "../components/NavBar";

import BlogList from "../components/BlogList";

import BlogDetails from "../components/BlogDetails";
const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/book/:bookId" element={<Book />} />
        <Route path="/blog/:blogIndex" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<Fans />} />
            <Route path="fans" element={<Fans />} />
            <Route path="follow" element={<Follow />} />
          </Route>
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;

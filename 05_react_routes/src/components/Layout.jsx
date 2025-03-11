import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn && <NavBar />}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

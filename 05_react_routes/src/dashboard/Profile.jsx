import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../app.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="nav-container">
        <nav>
          <NavLink to="fans" activeClassName="active">
            我的粉丝
          </NavLink>
          <NavLink to="follow" activeClassName="active">
            我的关注
          </NavLink>
        </nav>
        <div className="text-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;

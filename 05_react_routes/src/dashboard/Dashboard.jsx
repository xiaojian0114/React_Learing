import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../app.css";

const Dashboard = () => {
  // const location = useLocation();
  // const { username } = location.state || {};

  return (
    <div>
      <h2>DashDoard</h2>
      {/* <h3>Welcome:{username}</h3>{" "} */}
      <nav>
        {" "}
        <NavLink to="profile" activeClassName="active">
          profile{" "}
        </NavLink>{" "}
        <NavLink to="setting" activeClassName="active">
          setting{" "}
        </NavLink>{" "}
      </nav>
      <Outlet />{" "}
    </div>
  );
};

export default Dashboard;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/navbar/Navbar";
import { Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
             <Link to='/dashboard'> My Appointments</Link>
             <Link to='/dashboard/totalUser'> All User</Link>
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

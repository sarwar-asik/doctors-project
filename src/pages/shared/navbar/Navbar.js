import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../firebase/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const MenuItem = (
    <React.Fragment>
      <li className="  mx-1 rounded-lg  ">
        {" "}
        <Link to="/">Home </Link>{" "}
      </li>
      <li className="  mx-1 rounded-lg  ">
        {" "}
        <Link to="/appointment">AppointMent</Link>{" "}
      </li>
      <li className="  mx-1 rounded-lg  ">
        {" "}
        <Link to="/">Review</Link>{" "}
      </li>

      {user?.uid ? (
        <li onClick={logout} className="hover:bg-red-500   mx-1 hover:text-white rounded-lg  ">
          {" "}
          <Link>Log Out</Link>{" "}
        </li>
      ) : (
        <li className="  mx-1 rounded-lg  ">
          {" "}
          <Link to="/login">Log In</Link>{" "}
        </li>
      )}

      <li className="  mx-1 rounded-lg  ">
        <Link to="/dashboard">Dashboard </Link>
      </li>
      <li className="  mx-1 rounded-lg  ">
        <Link to="/">About </Link>
      </li>
      <li className="  mx-1 rounded-lg  ">
        {" "}
        <Link to="/">Contact Us </Link>{" "}
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {MenuItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{MenuItem}</ul>
      </div>

      <label   htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

    </div>
  );
};

export default Navbar;

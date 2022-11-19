import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import useAdmin from "../hooks/admin/useAdmin";
import Loading from "../pages/shared/loading/Loading";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const [isAdmin ,adminloading] =useAdmin(user?.email)

  const location = useLocation();

  if (loading || adminloading) {
    return <Loading></Loading>
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;

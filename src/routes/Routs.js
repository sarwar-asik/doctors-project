import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Appointment from "../pages/appointemnt/Appointment/Appointment";
import AddDoctors from "../pages/dashboard/adddDoctors/AddDoctors";
import TotalUser from "../pages/dashboard/alluse/TotalUser";
import ManageDoctors from "../pages/dashboard/manageDoctors/ManageDoctors";
import MyAppointment from "../pages/dashboard/MyAppointment";
import Home from "../pages/home/Home";
import LogIn from "../pages/login/LogIn";
import Profile from "../pages/profile/Profile";
import Signup from "../pages/signup/Signup";
import AdminRoutes from "./AdminRoutes";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path:'/profile',
        element:<Profile/>
      }
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout></DashboardLayout>
      </PrivateRouter>
    ),
    children: [
      { path: "/dashboard", element: <MyAppointment /> },
      {
        path:'/dashboard/totalUser',element:<AdminRoutes><TotalUser/></AdminRoutes>
      },
      {
        path:'/dashboard/adddoctor',
        element:<AdminRoutes><AddDoctors/></AdminRoutes>
      },
      {
        path:'/dashboard/manageDoctors',
        element:<AdminRoutes><ManageDoctors/></AdminRoutes>
      }
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Appointment from "../pages/appointemnt/Appointment/Appointment";
import TotalUser from "../pages/dashboard/alluse/TotalUser";
import MyAppointment from "../pages/dashboard/MyAppointment";
import Home from "../pages/home/Home";
import LogIn from "../pages/login/LogIn";
import Signup from "../pages/signup/Signup";
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
        path:'/dashboard/totalUser',element:<TotalUser/>
      }
    ],
  },
]);

export default router;

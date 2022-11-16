import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Appointment from "../pages/appointemnt/Appointment/Appointment";
import Dashbord from "../pages/dashboard/Dashbord";
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
      {
        path: "/dashbord",
        element: (
          <PrivateRouter>
            <Dashbord />
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;

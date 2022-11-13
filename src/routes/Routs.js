import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Appointment from "../pages/appointemnt/Appointment/Appointment";
import Home from "../pages/home/Home";
import LogIn from "../pages/login/LogIn";

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
        path:'/login',
        element:<LogIn/>
      },
{
  path:'/appointment',
  element:<Appointment/>
}
    ],
  },
]);

export default router;

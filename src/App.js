import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routs";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;

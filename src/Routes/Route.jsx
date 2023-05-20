import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home/Home";
import F404 from "../Pages/FourOfour/F404";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/signin",
        element: <Login></Login>
      },
    ],
  },
  {
    path: "*",
    element: <F404></F404>,
  },
]);


export default router
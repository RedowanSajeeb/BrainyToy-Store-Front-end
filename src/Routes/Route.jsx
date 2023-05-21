import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home/Home";
import F404 from "../Pages/FourOfour/F404";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import AddAToy from "../Pages/AddAToy/AddAToy";
import ToysShowAll from "../Pages/All-Toys/ToysShowAll";
import Details from "../Pages/All-Toys/Details";
import PrivateRoutes from "./PrivateRoutes";
import Mytoy from "../Pages/MyToys/Mytoy";
import DataUpdate from "../Pages/Update/DataUpdate";




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
        element: <Login></Login>,
      },
      {
        path: "/addAToy",
        element: <AddAToy></AddAToy>,
      },
      {
        path: "/allToys",
        element: <ToysShowAll></ToysShowAll>,
        loader: () => fetch("http://localhost:5000/brainy"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <Details></Details>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brainy/${params.id}`),
      },
      {
        path: "/mytoy",
        element: <Mytoy></Mytoy>,
      },
      {      
        path: "/update/:id",
        element: <DataUpdate></DataUpdate> ,
        loader: ({ params }) => fetch(`http://localhost:5000/brainy/${params.id}`)
      }
    ],
  },

  {
    path: "*",
    element: <F404></F404>,
  },
]);


export default router
import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Authprovider from "./Components/provider/Authprovider";
import Order from "./Components/order/Order";
import PrivateRouter from "./Components/privateroute/PrivateRouter";
import Userprofile from "./Components/personalProfile/Userprofile";
import UserDashboard from "./Components/personalProfile/Dashboard/UserDashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/Home",
        element: <Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>,

      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {path:'/order',
      element:<PrivateRouter><Order></Order></PrivateRouter>

      },
      {
        path:"/profile",
        element:<PrivateRouter><Userprofile></Userprofile></PrivateRouter>
      },
      {
        path:'/dashboard',
        element:<PrivateRouter><UserDashboard></UserDashboard></PrivateRouter>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <Authprovider>
   <RouterProvider router={router} />
   </Authprovider>
  </React.StrictMode>
);

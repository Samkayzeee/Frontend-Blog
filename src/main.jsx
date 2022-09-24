import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import Login from "./pages/Confirmation/Login";
import Signup from "./pages/Confirmation/Signup";




const router = createBrowserRouter([
  {
    path: '/', element: <Login/>,
  },
  {
    path: '/signup', element: <Signup /> 
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

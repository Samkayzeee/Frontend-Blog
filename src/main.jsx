import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard/Dashboard";
// import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage/Homepage";
import View from "./pages/viewpage/viewpage";

const router = createBrowserRouter([
  {
    path: "/",element: <Homepage />,
  },
  {
    path: `/:name/:uid`,element: <View />,
  },
  {
    path: "/dashboard",element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import Signup from "./pages/Confirmation/Signup";
import Login from "./pages/Confirmation/Login";
import Upload from "./pages/Confirmation/upload/Upload";






const router = createBrowserRouter([
  {
    path: "/", element: <Signup />,
  },
  {
    path: "/login", element: <Login />
  },
  
  {path:"/upload", element: <Upload/>}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

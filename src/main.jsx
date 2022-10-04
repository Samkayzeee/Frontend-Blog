import React from "react";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
// import Contexts from "./Contexts/Contexts";
// import Contexts_1 from "./Contexts/Contexts_1";
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
// const Homepage = React.lazy(() => import('./pages/Homepage/Homepage'))
// const Profile = React.lazy(() => import('./pages/Profile/Profile'))

// const router = createBrowserRouter(
//   [
//     { path: "/", element: <Homepage /> },
//     { path: '/Profile', element: <Profile /> }
//   ]
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Contexts_1>
      <Contexts>
        <Suspense> */}
          <RouterProvider router={router} />
        {/* </Suspense>
      </Contexts>
    </Contexts_1> */}
  </React.StrictMode>
);

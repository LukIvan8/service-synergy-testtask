import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import UnderConstruction from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <UnderConstruction />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

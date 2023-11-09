import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Layout } from "./portfolio/Layout/Layout.tsx";
import { Work } from "./portfolio/Work/Work.tsx";
import { Labs } from "./portfolio/Labs/Labs.tsx";
import { NotFound } from "./portfolio/Not-found/NotFound.tsx";

import "normalize.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Work />,
        index: true,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/labs",
        element: <Labs />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

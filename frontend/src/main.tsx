import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Layout } from "./portfolio/Layout/Layout.tsx";
import { Work } from "./portfolio/Work/Work.tsx";
import { Labs } from "./portfolio/Labs/Labs.tsx";
import { Login } from "./portfolio/Login/Login.tsx";
import { NotFound } from "./portfolio/Not-found/NotFound.tsx";

import "normalize.css";
import "./index.css";
import { loginAction } from "./portfolio/Login/Login-action.tsx";
import { Dashboard } from "./dashboard/Dashboard.tsx";
import { logout, loginStatusLoader } from "./utils/auth.ts";
import { loginLoader } from "./portfolio/Login/Login-loader.tsx";
import { dashboardLoader } from "./dashboard/Dashboard-loader.ts";
import { AddProjectAction } from "./dashboard/AddProject/AddProject-action.ts";
import { AddProject } from "./dashboard/AddProject/AddProject.tsx";
// import { CustomError } from "./portfolio/CustomError.tsx";

export const routes = [
  {
    id: "root",
    path: "/",
    element: <Layout />,
    // errorElement: <CustomError message="An error occurred." />,
    loader: loginStatusLoader,
    children: [
      {
        index: true,
        element: <Work />,
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "labs",
        element: <Labs />,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        loader: loginLoader,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: dashboardLoader,
        children: [
          {
            path: "add-project",
            element: <AddProject />,
            action: AddProjectAction,
          },
        ],
      },
      {
        path: "logout",
        action: () => {
          sessionStorage.removeItem("username");
          return logout();
        },
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={
        <div className="flex justify-center items-center h-screen">
          <p className="text-2xl">Loading...</p>
        </div>
      }
    />
  </React.StrictMode>,
);

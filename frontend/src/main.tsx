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
import { dashboardAction } from "./dashboard/Dashboard-action.ts";
import { CustomError } from "./portfolio/CustomError.tsx";
import { AddProject } from "./dashboard/AddProject/AddProject.tsx";
import { EditProject } from "./dashboard/EditProject/EditProject.tsx";

export const routes = [
  {
    id: "root",
    path: "/",
    element: <Layout />,
    errorElement: <CustomError />,
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
        action: dashboardAction,
        children: [
          {
            path: "",
            element: <p>Dashboard</p>,
          },
          {
            path: "add-project",
            element: <AddProject />,
          },
          {
            path: "edit-project",
            element: <EditProject />,
          },
          {
            path: "sort-projects",
            element: <p>Sort projects</p>,
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
          <p className="text-2xl">
            Spinning up the server. This shouldn’t take long...
          </p>
        </div>
      }
    />
  </React.StrictMode>,
);

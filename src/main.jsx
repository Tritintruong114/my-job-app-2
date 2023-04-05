import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import InfoJobs from "./pages/InfoJobs";
import InfoBlog from "./pages/InfoBlog";
import InfoCompany from "./pages/InfoCompany";
import InfoStory from "./pages/InfoStory";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./hooks/auth";
import { RequireAuth } from "./hooks/RequireAuth";
import Profile from "./pages/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        // children: [],
      },
      {
        path: "infoJobs",
        element: (
          <RequireAuth>
            <InfoJobs />
          </RequireAuth>
        ),
        children: [
          {
            path: "1",
            element: <InfoJobs />,
          },
          {
            path: "2",
            element: <InfoBlog />,
          },
          {
            path: "3",
            element: <InfoBlog />,
          },
          {
            path: "4",
            element: <InfoBlog />,
          },
        ],
      },
      {
        path: "infoBlog",
        element: (
          <RequireAuth>
            <InfoBlog />
          </RequireAuth>
        ),
      },
      {
        path: "infoCompany",
        element: (
          <RequireAuth>
            <InfoCompany />
          </RequireAuth>
        ),
      },
      {
        path: "infoStory",
        element: (
          <RequireAuth>
            <InfoStory />
          </RequireAuth>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

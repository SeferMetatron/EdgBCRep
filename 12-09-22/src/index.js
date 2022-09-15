import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import { Home, Category, ErrorPage, Recipe, TestPage } from "./pages/index";
import { Instructions } from "./components/Instructions/instructions";
import { Ingredients } from "./components/Ingredients/ingredients";
import { YtPlayer } from "./components/YtPlayer/ytPlayer";
import { ENDPOINTS } from "./utils/endpoints";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          return fetch(ENDPOINTS.CATEGORIES);
        },
      },
      {
        path: "/category",
        element: <Navigate to={"/"} />,
      },
      {
        path: "/category/:categoryName",
        children: [
          {
            path: "",
            element: <Category />,
            loader: ({ params }) => {
              return fetch(`${ENDPOINTS.FILTER}?c=${params?.categoryName}`);
            },
          },
          {
            path: ":recipeName/:id",
            element: <Recipe />,
            loader: async ({ params }) => {
              return fetch(`${ENDPOINTS.DETAIL}?i=${params.id}`);
            },
            children: [
              { path: "", element: <Navigate to="./ingredients" /> },
              { path: "ingredients", element: <Ingredients /> },
              { path: "instructions", element: <Instructions /> },
              { path: "youtube", element: <YtPlayer /> },
            ],
          },
        ],
      },
      { path: "/test", element: <TestPage /> },
      { path: "*", element: <ErrorPage status={404} /> },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

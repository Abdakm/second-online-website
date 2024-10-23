import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Signin from './pages/Signin'
import View_work from './pages/View_work'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "404Error",
  },
  {
    path: '/signin',
    element: <Signin />
  },
  {
    path: '/view work',
    element: <View_work />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);

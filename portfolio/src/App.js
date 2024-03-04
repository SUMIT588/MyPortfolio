import "./index.css";

import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import React from "react";
import Skills from "./components/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

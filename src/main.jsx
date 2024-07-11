import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Spinner from "./components/spinner";
import { LandingPage, Events } from "./pages/pages";
import Header from "./components/header/header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/events",
    element: <Events />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);

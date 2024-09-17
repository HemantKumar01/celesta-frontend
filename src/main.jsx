import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Spinner from "./components/spinner";
import { LandingPage, EventsPage, Login, Contact, Sponsors } from "./pages/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
//   {
//     path: "/login",
//     element: <Login />,
//   },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/sponsors",
    element: <Sponsors />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);

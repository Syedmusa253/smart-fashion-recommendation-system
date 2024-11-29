import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sign_in from "./components/Sign_in.jsx";
import Sign_up from "./components/Sign_up.jsx";
import User_interface from "./User_interface.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-in",
    element: <Sign_in />,
  },
  {
    path: "/sign-up",
    element: <Sign_up />,
  },
  {
    path: "/main",
    element: <User_interface />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

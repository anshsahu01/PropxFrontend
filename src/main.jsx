import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import store from "./Store/Store.js";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import SignInpage from "./pages/SignInpage.jsx";
import Loginpage from "./pages/Loginpage.jsx";
import Profilepage from "./pages/Profilepage.jsx";
import Homepage from "./pages/Homepage.jsx";
import Logoutpage from "./pages/Logoutpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/signin",
        element: <SignInpage />,
      },
      {
        path: "/login",
        element: <Loginpage />,
      },
      {
        path: "/profile",
        element: <Profilepage />,
      },
      {
        path: "/logout",
        element: <Logoutpage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

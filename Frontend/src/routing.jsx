import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Explore from "./components/Explore.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
    ],
  },
]);


export default router;
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import LandingPage from "../components/LandingPage";
import Menu from "../components/Menu";
import Layout from "../layout/Layout";

const ROUTES = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/menu",
    element: <Menu />,
  }
];

export default ROUTES;

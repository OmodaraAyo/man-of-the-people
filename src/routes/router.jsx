import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Account from "../pages/Account";
import LandingPage from "../components/LandingPage";
import Menu from "../components/menu/Menu";
import Layout from "../layout/Layout";
import Dashboard from "../pages/Dashboard";

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
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/menu",
    element: <Menu />,
  },
];

export default ROUTES;

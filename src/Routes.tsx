import { useRoutes } from "react-router-dom";
import Intro from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";

const Routes = () => {
  let element = useRoutes([
    {
      path: "/welcome",
      element: <Intro />,
    },
    {
      path: "/",
      element: <Dashboard />,
    },
  ]);

  return element;
};

export default Routes;

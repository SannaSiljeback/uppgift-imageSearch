import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
          errorElement: <NotFound />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
          errorElement: <NotFound />,
        }
      ],
    },
  ]);
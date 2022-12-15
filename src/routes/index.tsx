import NotFound from "@/pages/NotFound";
import { Home, MovieDetail, Popular } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "@/components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/movies/:id",
    element: <MovieDetail />,
    errorElement: <NotFound />,
  },
  {
    path: "/",
    element: <Navbar active />,
    errorElement: <NotFound />,
    children: [
      {
        path: "movie/popular",
        element: <Popular />,
      },
      {
        path: "movie/top_rated",
        element: <Popular />,
      },
      {
        path: "movie/upcoming",
        element: <Popular />,
      },
    ],
  },
]);

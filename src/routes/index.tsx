import { Home, MovieDetail } from "@/pages";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

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
]);

import { Home, MovieDetail } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies/:id",
    element: <MovieDetail />,
  },
]);

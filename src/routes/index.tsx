import { Navbar } from "@/components";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  LoginPage,
  MovieDetail,
  Popular,
  SignInPage,
  TopRated,
} from "@/pages";

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
        element: <TopRated />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
]);

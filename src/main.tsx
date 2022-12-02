import "./index.css";
import App from "./App";
import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movies/:id",
    element: <MovieDetail />,
    errorElement: <div>error</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);

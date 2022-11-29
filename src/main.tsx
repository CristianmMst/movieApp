import "./index.css";
import App from "./App";
import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import MovieDetail from "./pages/MovieDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>error</div>,
  },
  {
    path: "/movies/:id",
    element: <MovieDetail />,
    errorElement: <div>error</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

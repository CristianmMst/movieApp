import "./index.css";
import App from "./App";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

/* <RouterProvider router={router} /> */
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

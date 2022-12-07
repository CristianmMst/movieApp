import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;

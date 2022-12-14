import { useEffect } from "react";
import { Movie } from "@/components";
import { getPopularMovies } from "@/redux/slices/movieSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

export const Popular = () => {
  const dispatch = useAppDispatch();
  const { popular } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);

  return (
    <div className="Movies">
      {popular.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

export default Popular;

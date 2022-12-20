import { useEffect } from "react";
import { Movie } from "@/components";
import { getTopRatedMovies } from "@/redux/slices/movieSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

export const TopRated = () => {
  const dispatch = useAppDispatch();
  const { topRated } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getTopRatedMovies());
    console.log(topRated);
  }, []);

  return (
    <div className="Movies">
      {topRated.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

export default TopRated;

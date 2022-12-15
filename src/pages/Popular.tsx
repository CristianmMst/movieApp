import { useEffect } from "react";
import { Movies } from "@/components";
import { useAppDispatch } from "@/hooks/redux";
import { getPopularMovies } from "@/redux/slices/movieSlice";

export const Popular = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPopularMovies());
  });
  return <Movies />;
};

export default Popular;
